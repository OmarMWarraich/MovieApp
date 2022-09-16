import Logo from '../assets/logo.png';

const header = document.querySelector('header');
const navBar = () => {
  const nav = document.createElement('nav');

  nav.innerHTML = `
        <ul class="nav-header">
            <li class="logo"></li>
            <li><a href="#">Shows List</a></li>
            <li><a href="#">Best sales</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
    `;

  header.appendChild(nav);

  const logo = document.querySelector('.logo');
  const myLogo = new Image();

  myLogo.src = Logo;
  myLogo.alt = 'My Logo';

  logo.appendChild(myLogo);
};

export default navBar;