import reservationsPopUP from './reservationsPopUp.js';
import commentsPopUP from './commentsPopUp.js';
import '../modulesCSS/reservationsPopUP.css';
import '../modulesCSS/commentsPopUP.css';
import { getLikes, postLikes } from './likes.js';

const main = document.querySelector('main');
const shows = () => {
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      const shows = data;
      const showsContainer = document.createElement('div');
      showsContainer.className = 'shows-container';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        const showCard = document.createElement('div');
        showCard.className = 'show-card';
        showCard.innerHTML = `
                <div class="show-card-image">
                    <figure class="image">
                        <img src="${show.image.medium}" alt="${show.name}">
                    </figure>
                </div>
                <div class="show-card-content">
                    <div class="show-card-title">${show.name}</div>
                </div>
                <div class="likes-row">
                <div class="likes${show.id}" >
                  <p>Likes (0)</p>
                </div>
                  <i class="fa-sharp fa-solid fa-heart" id=${show.id}></i>
                </div>
                <button class="button comment" type="button" id=${show.id}>Comments</button>
                <button class="button reservation" type="button" id=${show.id}>Reservations</button>
            `;
        showsContainer.appendChild(showCard);
      }
      main.appendChild(showsContainer);
      const reservationsButtons = document.querySelectorAll('.reservation');
      for (let i = 0; i < reservationsButtons.length; i += 1) {
        const button = reservationsButtons[i];
        button.addEventListener('click', (e) => {
          reservationsPopUP(e.currentTarget.id);
        });
      }

      const commentsButtons = document.querySelectorAll('.comment');
      for (let j = 0; j < commentsButtons.length; j += 1) {
        const button = commentsButtons[j];
        button.addEventListener('click', (e) => {
          commentsPopUP(e.currentTarget.id);
        });
      }

      const likesButtons = document.querySelectorAll('.fa-heart');
      for (let k = 0; k < likesButtons.length; k += 1) {
        const button = likesButtons[k];
        if (window.localStorage.likedArray) {
          const likedArray = JSON.parse(window.localStorage.likedArray);
          if (likedArray.includes(button.id)) {
            button.classList.add('clicked');
            button.style.color = 'red';
          }
        }
        button.addEventListener('click', async (e) => {
          let likedArray = [];
          if (window.localStorage.likedArray) {
            likedArray = JSON.parse(window.localStorage.likedArray);
          }
          if (!button.classList.contains('clicked')) {
            likedArray.push(e.currentTarget.id);
            window.localStorage.likedArray = JSON.stringify(likedArray);
            await postLikes(e.currentTarget.id);
            getLikes();
            button.classList.add('clicked');
            button.style.color = 'red';
          }
        });
      }
    });
  getLikes();
};
export default shows;