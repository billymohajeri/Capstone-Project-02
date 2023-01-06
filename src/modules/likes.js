import { BASE_URL } from './utils.js';

const getLikes = async () => {
  const response = await fetch(`${BASE_URL}/likes`);
  const data = await response.json();
  return data;
};

const addLike = async (id) => {
  const result = await fetch(`${BASE_URL}/likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const response = await result.text();
  return response;
}

export { getLikes, addLike };