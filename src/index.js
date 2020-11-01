import './index.html';
import './style.css';

console.log('funguju!');

const navbtn = document.getElementById('nav-btn');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.navItem');

navbtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navItems.forEach((nl) => {
  nl.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});

const orderbtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = false;

const toggleButton = () => {
  drinkCup.classList.toggle('drink__cup--selected');

  if (ordered === false) {
    orderbtn.textContent = 'Zrušit';
    ordered = true;
  } else {
    orderbtn.textContent = 'Objednat';
    ordered = false;
  }
};

orderbtn.addEventListener('click', toggleButton);
