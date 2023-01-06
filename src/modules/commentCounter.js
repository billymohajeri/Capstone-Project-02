const commentCounter = async () => {
  const popupSection = document.querySelector('.popup');
  const h2 = document.getElementById('comments');
  const p = popupSection.getElementsByTagName('p');
  h2.innerText = `Comments (${p.length})`;
};
export default commentCounter;