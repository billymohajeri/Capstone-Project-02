/** * @jest-environment jsdom */
import { getLikes, addLike } from '../modules/likes.js';
import { BASE_URL } from '../modules/utils.js';

describe('getLikes', () => {
  it('should return data from the /likes endpoint', async () => {
    // Arrange
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // Act
    const result = await getLikes();

    // Assert
    expect(result).toEqual(mockSuccessResponse);
  });
});

describe('addLike', () => {
  it('should send a POST request to the /likes endpoint', async () => {
    // Arrange
    const mockSuccessResponse = 'Success';
    const mockFetchPromise = Promise.resolve({
      text: () => mockSuccessResponse,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // Act
    const result = await addLike('123');

    // Assert
    expect(result).toEqual(mockSuccessResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/likes`,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: '123' }),
      }),
    );
  });
});
