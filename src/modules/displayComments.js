import { BASE_URL } from './utils.js';
import commentCounter from './commentCounter.js';
import addComment from './addComment.js';
import displayDetails from './displayDetails.js';

let itemID = 0;
const detailTitle = document.querySelector('.detail-title');
const detailYear = document.querySelector('.detail-year');
const detailDirector = document.querySelector('.detail-director');
const detailStory = document.querySelector('.detail-story');
const movieImg = document.querySelector('.movie-poster');
const popup = document.querySelector('.popup');
const getComments = async (i) => {
  const response = await fetch(`${BASE_URL}/comments?item_id=item${i}`);
  const data = await response.json();
  return data;
};
const displayComments = async () => {
  const popupSection = document.querySelector('.popup');
  if (!popupSection.getElementsByTagName('h2').length) {
    popupSection.innerHTML = `<i class="fa-solid fa-xmark fa-xl"></i>${popupSection.innerHTML}`;
    const h2 = document.createElement('h2');
    h2.id = 'comments';
    const detailSec = document.querySelector('.details');
    detailSec.after(h2);
  }
  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('fa-xmark')) {
      popup.style.display = 'none';
      detailTitle.innerHTML = '';
      detailYear.innerHTML = '';
      detailDirector.innerHTML = '';
      detailStory.innerHTML = '';
      movieImg.src = '';
    }
    const textUsername = document.getElementById('username-text');
    const textComment = document.getElementById('comment-text');
    if (event.target.classList.value === 'fa-regular fa-comment fa-2xl') {
      const dataComments = await getComments(event.target.id);
      itemID = event.target.id;
      let commentText = '';
      const commentPopup = document.querySelector('.comment-popup');
      commentPopup.innerText = '';
      textUsername.value = '';
      textComment.value = '';
      popup.style.display = 'block';
      for (let index = 0; index < dataComments.length; index += 1) {
        commentText = `${dataComments[index].creation_date} ${dataComments[index].username}: ${dataComments[index].comment}`;
        commentPopup.innerHTML += `<p>${commentText}</p>`;
      }
      const p = popupSection.getElementsByTagName('p');
      commentCounter(p);
      const h2 = document.getElementById('comments');
      h2.innerText = `Comments (${await commentCounter(p)})`;
    }
    if (
      event.target.classList.value === 'cmt-btn'
      && textUsername.value
      && textComment.value
    ) {
      await addComment(itemID, textUsername.value, textComment.value);
    }
    if (itemID) await displayDetails(itemID);
  });
};
export default displayComments;
