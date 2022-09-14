import reservationsPopUP from './reservationsPopUp.js';

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
                <div class="likes">Likes</div>
                <i class="fa-sharp fa-solid fa-heart"></i>
                <button class="button" type="button">Comments</button>
                <button class="button reservation" type="button" id=${show.id}>Reservations</button>
            `;
        showsContainer.appendChild(showCard);
      }
      main.appendChild(showsContainer);
      const reservationsButtons = document.querySelectorAll('.reservation');
      for (let i = 0; i < reservationsButtons.length; i += 1) {
        const button = reservationsButtons[i];
        button.addEventListener('click', reservationsPopUP);
      }
    });
};

export default shows;