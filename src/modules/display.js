import Movies from './counter.js';
import getShows from './getShows.js';

const displayShows = async () => {
  const data = await getShows();
  const movieCount = new Movies();
  movieCount.setNumber(data.description.length);
  const movies = document.querySelector('.movies');
  movies.innerHTML = '';
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
          <i class="fa-regular fa-heart fa-2xl"></i>
          <i class="fa-regular fa-comment fa-2xl"></i>
          <span id="count-like"></span>

        </div>
        </div>
        </div>`;
    movies.appendChild(movieTiles);
    // <button class="comment">Comments</button>
  });
  const itemCount = document.querySelector('.item-count');
  itemCount.innerHTML = `${data.description.length} movies are currently displaying`;
  return data.description;
};

export default displayShows;

