import displayShows from './display.js';
import { BASE_URL } from './utils.js';

const commentPopup = document.querySelector('.comment-popup');
const getComments = async (i) => {
  const response = await fetch(`${BASE_URL}/comments?item_id=item${i}`);
  // const response = await fetch(`${BASE_URL}/comments?item_id=item1`);
  const data = await response.json();
  // console.log(data);
  // if (data) {
  //   // console.log();
  //   const h2 = document.createElement('h2');
  //   h2.innerText = `Comments (${data.length})`;
  //   commentPopup.append(h2);
  // }
  // const  dataMoives= await displayShows();
  // console.log('Comments', dataComments1.length);
  // console.log('Movies', dataMoives.length);

  return data;
};

const displayComments = async () => {
  // const movies = document.querySelector('.movies');

  // commentPopup.innerText += BASE_URL;
  const dataMoives = await displayShows();

  // console.log(closeBtn);
  // let arr = Array.from(commentBtn)

  const commentBtn = document.querySelector('.fa-comment');
  // console.log(commentBtn);
  console.log(commentBtn);

  document.addEventListener('click', (event) => {
    console.table('event.target', event.target.outerHTML);
    // let stringName = event.target;

    // stringName = .replace('::before', '');
    // console.log(stringName);
    console.log('commentBtn', commentBtn);
    if (event.target === commentBtn) {
      console.log('yes');
    }
  });

  // for (let index = 0; index < commentBtn.length; index += 1) {
  // console.log(closeBtn);
  // commentBtn[index].addEventListener('click', (e) => {
  // console.log('click', index, e);
  // commentBtn[index].id = index + 1;
  // console.log(e.target.id);
  // console.log(commentBtn[index]);
  // let a = getComments(index);
  // if (a.length) {
  //    console.log(a.length);
  //   const h2 = document.createElement('h2');
  //   h2.innerText = `Comments (${data.length})`;
  //   commentPopup.append(h2);
  // }

  // const response = await fetch(`${BASE_URL}/comments?item_id=item${index}`);
  // commentPopup.style.display = 'block';
  // const dataComments = getComments(index);
  // console.log(dataComments);
  // });
  // }

  // console.log(commentBtn);

  // console.log(arr);
  // console.log(commentBtn.length);
  const closeBtn = document.querySelector('.fa-xmark');
  // console.log('CCCCCCCCCC',closeBtn);
  closeBtn.addEventListener('click', () => {
    // console.log('closeeeeeeeeeeeeeeeee');
    commentPopup.style.display = 'none';
  });
  //   console.log(commentBtn[0]);
  // let arry = Array.from(commentBtn)
  // console.log(arry);
  //   console.log(commentPopup.style);

  const dataComments = await getComments();
  console.log(commentPopup.childNodes);
  // if (commentPopup.childNodes.length <= 3) {
  //   const h2 = document.createElement('h2');
  //   h2.innerText = `Comments (${dataComments.length})`;
  //   commentPopup.append(h2);

  //   let commentText = '';
  // for (let index = 0; index < dataComments.length; index += 1) {
  // console.log(
  //   `${dataComments[index].creation_date} ${dataComments[index].username}: ${dataComments[index].comment}`
  // );
  // commentText = `${dataComments[index].creation_date} ${dataComments[index].username}: ${dataComments[index].comment}`;
  // commentPopup.innerHTML += `<p>${commentText}</p>`;
  // }
};
// };

export default displayComments;

