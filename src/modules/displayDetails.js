import getShows from './getShows.js';
import { API_URL } from './utils.js';

let uniqueID = '';
const displayDetails = async (index) => {
  const data1 = await getShows();
  uniqueID = data1.description[index - 1]['#IMDB_ID'];
  const response = await fetch(`${API_URL}/?tt=${uniqueID}`);
  const data2 = await response.json();
  const movieImg = document.querySelector('.movie-poster');
  movieImg.src = data2.short.image;
  const detailTitle = document.querySelector('.detail-title');
  if (!detailTitle.innerHTML) detailTitle.innerHTML = data2.short.name;
  const detailDirector = document.querySelector('.detail-director');
  if (!detailDirector.innerHTML) { detailDirector.innerHTML = `Director: ${data2.short.director[0].name}`; }
  const detailStory = document.querySelector('.detail-story');
  if (!detailStory.innerHTML) detailStory.innerHTML = data2.short.description;
  const detailYear = document.querySelector('.detail-year');
  if (!detailYear.innerHTML) { detailYear.innerHTML = `Year: ${data2.top.releaseYear.year}`; }
};

export default displayDetails;
