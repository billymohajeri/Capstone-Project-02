import { BASE_URL } from './utils.js';

let reqBody = '';
const addComment = async (index, user, comment) => {
  if (index && user && comment) {
    reqBody = JSON.stringify({
      item_id: `item${index}`,
      username: user,
      comment,
    });
    const response = await fetch(`${BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: reqBody,
    });
    const data = await response.text();
    if (data) {
      const commentText = `<p>Just now ${user} said: ${comment}</p>`;
      const commentPopup = document.querySelector('.comment-popup');
      commentPopup.innerHTML += `<p>${commentText}</p>`;
    }
    return data || null;
  }
  return true;
};

export default addComment;
