import displayShows from './display.js';

const displayComments = async () => {
  const data = await displayShows();
  // const movies = document.querySelector('.movies');
  const commentPopup = document.querySelector('.comment-popup');
  const commentBtn = document.getElementsByClassName('fa-comment');
  const closeBtn = document.querySelector('.fa-xmark');
  closeBtn.addEventListener('click', () => {
    commentPopup.style.display = 'none';
  });
  //   console.log(commentBtn[0]);
  // let arry = Array.from(commentBtn)
  // console.log(arry);
  //   console.log(commentPopup.style);
  for (let index = 0; index < commentBtn.length; index += 1) {
    // console.log(closeBtn);
    commentBtn[index].addEventListener('click', () => {
      // console.log('click', index);
      commentPopup.style.display = 'flex';
    });
  }
  return data;
};

export default displayComments;
