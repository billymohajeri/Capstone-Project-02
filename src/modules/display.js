import Movies from './counter.js';
import getShows from './getShows.js';

const displayShows = async () => {
  const data = await getShows();
  const movieCount = new Movies();
  movieCount.setNumber(data.description.length);
  const movies = document.querySelector('.movies');
  movies.innerHTML = '';
  let idCounter = 1;
  data.description.forEach((movie) => {
    const movieTiles = document.createElement('div');
    movieTiles.innerHTML = `
    <div class="movie-tiles">
      <div class="movie-image">
        <img src="${movie['#IMG_POSTER']}" alt="movie poster" />
      </div>
      <div class="movie-info">
        <p class="movie-title">${movie['#TITLE']}</p>
        <div class="likes">
         <span id= "like-button">
          <i class="fa-regular fa-heart fa-2xl"></i>
          </span>
          <span id="count-like">1</span>
          <i class="fa-regular fa-comment fa-2xl" id=${idCounter}></i>
          

        </div>
        </div>
        </div>`;
    idCounter += 1;
    movies.appendChild(movieTiles);
  });
  const itemCount = document.querySelector('.item-count');
  itemCount.innerHTML = `${data.description.length} movies are currently displaying`;
  return data.description;
};

export default displayShows;
