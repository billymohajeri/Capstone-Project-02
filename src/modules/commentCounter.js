const commentCounter = async (p) => {
  let count = 0;
  for (let index = 0; index < p.length; index += 1) {
    count += 1;
  }
  return count;
};

export default commentCounter;
