import { API_URL } from './utils.js';

const getShows = async () => {
  const response = await fetch(`${API_URL}/?q=starwars`);
  const data = await response.json();
  // console.log(data.description);
  // data.descrption.sort((a, b) => a['#YEAR'] - b['#YEAR']);
  return data.description;
};

export default getShows;
