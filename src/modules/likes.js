// eslint-disable-next-line import/prefer-default-export
export const postLikes = async(id) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/likes`;
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
}

// eslint-disable-next-line import/prefer-default-export
export const getLikes = async(id) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/likes?item_id=${id}`;
    const response = await fetch(url);
    const data = await response.text();
    displayLikes(data, id);
}

const displayLikes = (data, id) => {
    
    const likesData = JSON.parse(data);
    const numOfLikes = likesData[0].likes;
    const likes = document.querySelector(`.likes${id}`);
    likes.innerHTML = `
    <p>Likes (${numOfLikes})</p>
    `;
    console.log(data);
}
