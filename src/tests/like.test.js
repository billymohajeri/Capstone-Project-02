import { BASE_URL } from '../modules/utils.js';

const getLikes = async (fetchFn) => {
  const response = await fetchFn(`${BASE_URL}/likes`);
  const data = await response.json();
  return data;
};
describe('getLikes', () => {
  it('should return data from the /likes endpoint', async () => {
    // Arrange
    const mockFetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => ({
        likes: 123,
      }),
    }));
    // Act
    const resultPromise = getLikes(mockFetch);
    // Assert
    const result1 = await resultPromise;
    expect(result1).toEqual({ likes: 123 });
    expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/likes`);
  });
});
