
import menus from './menu.json';
import foodCardsTmp from './templates/cards.hbs';




const menuRef = document.querySelector('ul.js-menu');
const markup = foodCardsTmp(menus);
menuRef.insertAdjacentHTML('beforeend', markup);

const checkBoxToolBar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let currentTema = Theme.LIGHT;
body.classList.add(currentTema);



checkBoxToolBar.addEventListener('change', (e) => { 
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK); 
  localStorage.setItem('tema', body.classList[0]);
});

localStorage.getItem('tema');
currentTema = localStorage.getItem('tema');

if (currentTema === Theme.DARK) {
  body.classList.replace(Theme.LIGHT, currentTema);
  checkBoxToolBar.checked = true;
}


