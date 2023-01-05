import { BASE_URL } from './utils.js';

const likeButton=document.getElementsByClassName('fa-heart')
const getLikes = async (i) => {
    const response = await fetch(`${BASE_URL}/likes`);
    const data = await response.json();
    return data;
  };

const displayLikes = async () => {
  document.addEventListener('click', async (event) => {
      if (event.target.classList.contains('fa-heart')) {
        likeButton.style.display = 'red';
    //   console.log('hello');
    }

  });
};

export default displayLikes;

const likeButton = document.querySelector('.like-button');
console.log(likeButton);

const getLikes = async () => {
    const response = await fetch(`${BASE_URL}/likes`);
    const data = await response.json();
    console.log(data);
    // return data
}
getLikes();

