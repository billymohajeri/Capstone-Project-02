import { BASE_URL } from "./utils.js";

const likeButton = document.getElementsByClassName("fa-heart");
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

// likeButton.innerHTML = `Like (${data.likeCount})`;
const displayLikes = async () => {
    likeButton.addEventListener("click", async (event) => {
      console.log('hello')
  });
};
displayLikes()