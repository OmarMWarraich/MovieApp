import '../modulesCSS/reservationsPopUP.css';

// const displayInfo = (mealInfo) => {
//   console.log(mealInfo);
// };

// const getMealInfo = async (id) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const mealInfo = data.meals[0];
//   displayInfo(mealInfo);
// };
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
const ReservationsPopUP = () => {
  const popUP = document.createElement('section');
  const elements = document.querySelectorAll('body>*');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].classList.add('hidden');
  }
  popUP.classList.add('reservations-pop-up');
  popUP.innerHTML = `
  <i class="fa-solid fa-xmark reservation-close"></i>
  <div class="meal-info"></div>
      `;
  document.body.appendChild(popUP);
  // getMealInfo(52772);
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