import { API_URL } from './utils.js';


getShows()

const getShows = async () => {
  const response = await fetch(`${API_URL}/?q=starwars`);
    const data = await response.json();
    console.log(data);
    // return data;
};

export default getShows;
