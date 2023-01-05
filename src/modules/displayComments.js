import { BASE_URL } from './utils.js';
import commentCounter from './commentCounter.js';

const commentPopup = document.querySelector('.comment-popup');
const popup = document.querySelector('.popup');

const getComments = async (i) => {
  const response = await fetch(`${BASE_URL}/comments?item_id=item${i}`);
  const data = await response.json();
  return data;
};

const displayComments = async () => {
  const popupSection = document.querySelector('.popup');
  if (!popupSection.getElementsByTagName('h2').length) {
    popupSection.innerHTML += '<i class="fa-solid fa-xmark fa-xl"></i>';
    const h2 = document.createElement('h2');
    h2.id = 'comments';
    popupSection.prepend(h2);
  }

  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('fa-xmark')) {
      popup.style.display = 'none';
    }
    if (event.target.classList.contains('fa-comment')) {
      const dataComments = await getComments(event.target.id);
      let commentText = '';
      commentPopup.innerText = '';
      for (let index = 0; index < dataComments.length; index += 1) {
        commentText = `${dataComments[index].creation_date} ${dataComments[index].username}: ${dataComments[index].comment}`;
        commentPopup.innerHTML += `<p>${commentText}</p>`;
        popup.style.display = 'block';
      }
      commentCounter();
    }
  });
};

export default displayComments;
