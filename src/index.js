import './index.html';
import './style.css';
import { Drink } from './Drink';

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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const drinkList = document.querySelector('.drinks-list');

drinks.forEach((d) => {drinkList.appendChild(Drink(d))});
