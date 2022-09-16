export const postLikes = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/likes';
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ item_id: id }),
  });
  return response.text();
};

export const likesCounter = (array, index) => {
  if (index < array.length) {
    return array[index].likes;
  }
  if (array.length === 0) {
    return 0;
  }
  throw new Error('index is out of array boundary!');
};

const displayLikes = (data) => {
  const likesData = JSON.parse(data);
  for (let i = 0; i < likesData.length; i += 1) {
    const id = +likesData[i].item_id;
    if (!Number.isNaN(id)) {
      const numOfLikes = likesCounter(likesData, i);
      const likes = document.querySelector(`.likes${id}`);
      likes.innerHTML = `
          <p>Likes (${numOfLikes})</p>
          `;
    }
  }
};

export const getLikes = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/likes?item_id=${id}`;
  const response = await fetch(url);
  const data = await response.text();
  displayLikes(data);
};
