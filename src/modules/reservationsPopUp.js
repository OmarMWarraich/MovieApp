import '../modulesCSS/reservationsPopUP.css';

const displayInfo = (data) => {
  const showInfo = document.querySelector('.show-info');
  showInfo.innerHTML = `
  <figure>
    <img src="${data.image.medium}" alt="${data.name}">
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
  <div class="add-reservation"></div>
  `;
  console.log(data);
};

const getShowInfo = async (id) => {
  const url = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  displayInfo(data);
};
/*
const getinvolveAPI = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
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
  });
  const data = await response.json();
  console.log(data);
};
*/
const ReservationsPopUP = (id) => {
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

export default ReservationsPopUP;