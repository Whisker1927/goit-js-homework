import posts from '../menu.json';
import postFeedItem from '../templates/template-item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('#menu'),
  checkbox: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'),
};
const markup = postFeedItem(posts);
refs.menuList.insertAdjacentHTML('beforeend', markup);

// const savedSettings = localStorage.getItem('Theme');
const savedSettings = JSON.parse(localStorage.getItem('Theme'));
themeAfterUpdate(savedSettings);
function themeAfterUpdate(notes) {
  if (notes && notes.includes(Theme.DARK)) {
    refs.checkbox.checked = true;
    darkTheme();
  } else {
    refs.checkbox.checked = false;
    lightTheme();
  }
}
// function themeAfterUpdate(notes) {
//   if (notes.includes(Theme.DARK)) {
//     refs.checkbox.checked = true;
//     darkTheme();
//   } else if (notes.includes(Theme.LIGHT)) {
//     refs.checkbox.checked = false;
//     lightTheme();
//   }
// }

refs.checkbox.addEventListener('change', e => {
  if (e.target.checked === true) {
    darkTheme();
  } else if (e.target.checked === false) {
    lightTheme();
  }
});
function darkTheme() {
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
}
function lightTheme() {
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
}
