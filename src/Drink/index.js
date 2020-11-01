import './style.css';
import { filledLayer } from '../Layer';

const drinkInfo = document.querySelector('.drink__info');

export const Drink = (props) => {
  const drinky = document.createElement('div');
  drinky.className = 'drinky';

  drinky.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    ${filledLayer({ ingredients: props.layers })}
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`;

  const orderbtn = drinky.querySelector('.order-btn');
  const drinkCup = drinky.querySelector('.drink__cup');

  const toggleButton = () => {
    drinkCup.classList.toggle('drink__cup--selected');
    if (props.ordered === false) {
      orderbtn.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      orderbtn.textContent = 'Objednat';
      props.ordered = false;
    }
  };
  orderbtn.addEventListener('click', toggleButton);

  return drinky;
};
