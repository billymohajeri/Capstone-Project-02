import getShows from './getShows.js';

const displayShows = async () => {
  const data = await getShows();
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
          <i class="fa-solid fa-heart"></i>
          <span id="count-like">1</span>
        </div>
        <button class="comment">Comments</button>
      </div>
    </div>`;
    movies.appendChild(movieTiles);
  });
};

export default displayShows;