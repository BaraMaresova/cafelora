import './index.html';
import './style.css';
import {Layer} from "./Layer";

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

const drinkInfo = document.querySelector('.drink__info');
const ingredients = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

const filledLayer = (props) => {
  let result = '';
  for (let i = 0; i < props.ingredients.length; i++) {
    result += Layer(props.ingredients[i]);
  }
  return result;
};

drinkInfo.innerHTML += filledLayer({ingredients:ingredients});

/* `<div
                    class="layer__color"
                    style="background-color: #feeeca"
                  ></div>
                  <div class="layer__label">mléčná pěna</div>
                </div>
                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #fed7b0"
                  ></div>
                  <div class="layer__label">teplé mléko</div>
                </div>

                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #613916"
                  ></div>
                  <div class="layer__label">espresso</div>
                </div>
              </div>` */
