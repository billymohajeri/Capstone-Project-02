/** * @jest-environment jsdom */
import commentCounter from '../modules/commentCounter.js';

describe('Test counting the comments', () => {
  test("Let's start with 3 elements...", async () => {
    const data = await commentCounter(['p', 'p', 'p']);
    expect(data).toBe(3);
  });
  test("Wait! 5 element array shouldn't be counted as 6 elements...", async () => {
    const data = await commentCounter(['p', 'p', 'p', 5, 9]);
    expect(data).not.toBe(6);
  });
  test('Check zero elements...', async () => {
    const data = await commentCounter([]);
    expect(data).toEqual(0);
  });
  test('Go for 10 elements...', async () => {
    const data = await commentCounter([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ]);
    expect(data).toBe(10);
  });
});
