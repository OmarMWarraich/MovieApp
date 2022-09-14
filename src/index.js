import './style.css';
import navBar from './modules/header.js';
// import Footer from './modules/footer.js';
import shows from './modules/Homepage.js';
import reservationsPopUP from './modules/reservationsPopUp.js';

shows();

navBar();
const reservationsButtons = document.querySelector('.reservation');
console.log(reservationsButtons);
// reservationsPopUP();

// Footer();