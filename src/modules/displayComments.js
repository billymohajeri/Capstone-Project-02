import { BASE_URL } from './utils.js';

const commentPopup = document.querySelector('.comment-popup');
const getComments = async (i) => {
  const response = await fetch(`${BASE_URL}/comments?item_id=item${i}`);
  const data = await response.json();
  return data;
};

const displayComments = async () => {
  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('fa-xmark')) {
      commentPopup.style.display = 'none';
    }
    if (event.target.classList.contains('fa-comment')) {
      commentPopup.style.display = 'block';
      const dataComments = await getComments(event.target.id);
      const h2 = document.createElement('h2');
      commentPopup.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
      h2.innerText = `Comments (${dataComments.length})`;
      commentPopup.append(h2);
      let commentText = '';
      for (let index = 0; index < dataComments.length; index += 1) {
        commentText = `${dataComments[index].creation_date} ${dataComments[index].username}: ${dataComments[index].comment}`;
        commentPopup.innerHTML += `<p>${commentText}</p>`;
      }
    }
  });
};

export default displayComments;
