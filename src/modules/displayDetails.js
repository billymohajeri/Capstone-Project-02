import getShows from './getShows.js';
import { API_URL } from './utils.js';

let uniqueID = '';
const displayDetails = async (index) => {
  const data1 = await getShows();
  uniqueID = data1.description[index - 1]['#IMDB_ID'];
  const response = await fetch(`${API_URL}/?tt=${uniqueID}`);
  const data2 = await response.json();
  const movieImg = document.querySelector('.movie-poster');
  movieImg.src = data1.description[index - 1]['#IMG_POSTER'];
  const detailTitle = document.querySelector('.detail-title');
<<<<<<< HEAD
  if (!detailTitle.innerHTML) { detailTitle.innerHTML = data1.description[index - 1]['#TITLE']; }
  const detailDirector = document.querySelector('.detail-director');
  if (!detailDirector.innerHTML) {
    detailDirector.innerHTML = `Director: ${data2.short.director[0].name}`;
  }
  const detailStory = document.querySelector('.detail-story');
  if (!detailStory.innerHTML) detailStory.innerHTML = data2.short.description;
  if (data2.short.description === undefined) { detailStory.innerHTML = 'No story available...'; }
=======
  detailTitle.innerHTML = data1.description[index - 1]['#TITLE'];
  const detailDirector = document.querySelector('.detail-director');
  if (data2.short.director === undefined) {
    detailDirector.innerHTML = 'Director: No director available...';
  } else {
    detailDirector.innerHTML = `Director: ${data2.short.director[0].name}`;
  }
  const detailStory = document.querySelector('.detail-story');
  detailStory.innerHTML = data2.short.description;
  if (data2.short.description === undefined) {
    detailStory.innerHTML = 'No story available...';
  }
>>>>>>> 6eaced55ecdc097a32c58a020d71ab94dc0b6410
  const detailYear = document.querySelector('.detail-year');
  detailYear.innerHTML = `Year: ${data1.description[index - 1]['#YEAR']}`;
};
export default displayDetails;