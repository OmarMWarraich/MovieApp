const commentCounter = (dataArray) => dataArray.length;
const sendRequest = async (apiURL, data) => {
  const url = apiURL;
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
    body: JSON.stringify(data),
  });
  return response.text();
};

const displayCommentData = (data) => {
  const comments = document.querySelector('.reservations-done');
  const commentsData = JSON.parse(data);
  const numOfComments = commentCounter(commentsData);
  if (commentsData.error) {
    comments.innerHTML = `
    <h3>Comments(0)</h3>
    <p>No comment has been done yet</p>
    `;
    return;
  }
  comments.innerHTML = `
  <h3>Comments(${numOfComments})</h3>
  `;
  for (let i = 0; i < numOfComments; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = `${commentsData[i].creation_date} &nbsp; by &nbsp;${commentsData[i].username}: &nbsp;${commentsData[i].comment}`;
    comments.appendChild(p);
  }
};
const getinvolveAPI = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/comments?item_id=${id}`;
  const response = await fetch(url);
  const data = await response.text();
  displayCommentData(data);
};
const displayInfo = (data) => {
  const showInfo = document.querySelector('.show-info');
  showInfo.innerHTML = `
  <figure>
    <img src="${data.image.original}" alt="${data.name}">
  </figure>
  <h2>${data.name}</h2>
  <div class="additional-info">
     <div class="info-1">
        <p>Type: ${data.type}</p>
        <p>Premiered: ${data.premiered}</p>
        <p>genres: ${data.genres}</p>
     </div>
    <div class="info-2">
        <p>Langauge: ${data.language}</p>
        <p>Ended: ${data.ended}</p>
        <p>Rating: ${data.rating.average}</p>
    </div>
  </div>
  <div class="reservations-done"></div>
  <form action="" method="get">
  <h3>Add a comment</h3>
  <div class="name">
      <label for="name"></label>
      <input type="text" name="name" id="name" placeholder="Your Name" required>
  </div>
  <div class="comment-message">
      <label for="commentMessage"></label>
      <textarea name="commentMessage" id="commentMessage" cols="30" rows="5" placeholder="Your insights" required></textarea>
  </div>
  <button type="submit">Comment</button>
</form>
  `;
  getinvolveAPI(data.id);
  const commentButton = document.querySelector('form button');
  commentButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.querySelector('form .name input');
    const theComment = document.querySelector('form .comment-message textarea');
    const commentData = {
      item_id: data.id,
      username: name.value,
      comment: theComment.value,
    };
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/comments/';
    await sendRequest(url, commentData);
    getinvolveAPI(data.id);
    name.value = '';
    theComment.value = '';
  });
};
const getShowInfo = async (id) => {
  const url = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  displayInfo(data);
};
const commentsPopUP = (id) => {
  const popUP = document.createElement('section');
  const elements = document.querySelectorAll('body>*');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].classList.add('hidden');
  }
  popUP.classList.add('reservations-pop-up');
  popUP.innerHTML = `
  <i class="fa-solid fa-xmark reservation-close"></i>
  <div class="show-info"></div>
      `;
  document.body.appendChild(popUP);
  getShowInfo(id);
  const xmark = document.querySelector('.reservations-pop-up .reservation-close');
  xmark.addEventListener('click', () => {
    const popUP = document.querySelector('.reservations-pop-up');
    const elements = document.querySelectorAll('body>*:not(.reservations-pop-up)');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('hidden');
    }
    popUP.remove();
  });
};

export { commentsPopUP as default, commentCounter };