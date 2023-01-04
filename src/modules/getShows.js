import { API_URL } from './utils.js';

const getShows = async () => {
  const response = await fetch(`${API_URL}/?q=starwars`);
  const data = await response.json();
  return data;
};

export default getShows;
