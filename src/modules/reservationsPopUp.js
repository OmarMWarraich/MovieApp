const reservationCounter = (dataArray) => dataArray.length;
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

const displayReservationData = (data) => {
  const reservations = document.querySelector('.reservations-done');
  const reservationsData = JSON.parse(data);
  const numOfReservations = reservationCounter(reservationsData);
  if (reservationsData.error) {
    reservations.innerHTML = `
    <h3>Reservations (0)</h3>
    <p>No reservation has been done yet</p>
    `;
    return;
  }
  reservations.innerHTML = `
  <h3>Reservations (${numOfReservations})</h3>
  `;
  for (let i = 0; i < numOfReservations; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = `${reservationsData[i].date_start} &nbsp; -  &nbsp; ${reservationsData[i].date_end}  &nbsp;&nbsp; by  &nbsp;&nbsp; ${reservationsData[i].username}`;
    reservations.appendChild(p);
  }
};
const getinvolveAPI = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/reservations?item_id=${id}`;
  const response = await fetch(url);
  const data = await response.text();
  displayReservationData(data);
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
  <h3>Add a reservation</h3>
  <div class="name">
      <label for="name"></label>
      <input type="text" name="name" id="name" placeholder="Your Name" required>
  </div>
  <div class="start-date">
      <label for="startDate"></label>
      <input type="date" name="startDate" id="startDate" required>
  </div>
  <div class="end-date">
      <label for="endDate"></label>
      <input type="date" name="endDate" id="endDate" required>
  </div>
  <button type="submit">Reserve</button>
</form>
  `;
  getinvolveAPI(data.id);
  const reserveButton = document.querySelector('form button');
  reserveButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.querySelector('form .name input');
    const startDate = document.querySelector('form .start-date input');
    const endDate = document.querySelector('form .end-date input');
    const reservationData = {
      item_id: data.id,
      username: name.value,
      date_start: startDate.value,
      date_end: endDate.value,
    };
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kc8ECGRfLEBUCmn5ZAnc/reservations/';
    await sendRequest(url, reservationData);
    getinvolveAPI(data.id);
    name.value = '';
    startDate.value = '';
    endDate.value = '';
  });
};
const getShowInfo = async (id) => {
  const url = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  displayInfo(data);
};
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

export { ReservationsPopUP as default, reservationCounter };