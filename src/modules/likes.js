import { BASE_URL } from './utils.js';

// likeButton.addEventListener('click', (e) => {
//   console.log(likeButton);
// // });
// const likeClick = async () => {
//   const response = await fetch(`${BASE_URL}/likes`, {
//     method: 'POST',
//   });
//   const data = await response.json();
//   console.log(data);
//   likeButton.innerHTML = `Like (${data.likeCount})`;
// };

// likeButton.addEventListener('click', likeClick);

// // Make an API request to retrieve the initial like count
// const response = await fetch(`${BASE_URL}/likes/count `);
// const data = await response.json();
// const likeButton = document.getElementsByClassName('fa-heart');

// likeButton.innerHTML = `Like (${data.likeCount})`;
const displayLikes = async () => {
  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('fa-heart')) {
      console.log('hello');
    }

    // const displayLikes = async () => {
    // likeButton.addEventListener('click', async (event) => {
  });
};

export default displayLikes;
