import './index.css';
import displayShows from './modules/display.js';
import getShows from './modules/getShows.js';
import displayComments from './modules/displayComments.js';
import { addLike } from './modules/likes.js';

displayComments();
document.addEventListener('DOMContentLoaded', () => {
  getShows();
  displayShows();
  const movies = document.querySelector('#movies-container');
  movies.addEventListener('click', (event) => {
    if (/heart/.test(event.target.className)) {
      const movieId = event.target.parentElement.parentElement.parentElement.id;
      addLike(movieId);
      const element = event.target.previousElementSibling;
      const newValue = Number(element.textContent) + 1;
      element.textContent = newValue;
    }
  });
});