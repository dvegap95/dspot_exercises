const orderCards = require('./exercise2');

describe('exercise 2', () => {
  test.each([
    ['./exercise2_i1.json', 2],
    ['./exercise2_i2.json', 0],
  ])('exercise 2... input file: %p; expected output: %p', (inFile, result) => {
    let input = require(inFile);
    expect(orderCards(input)).toBe(result);
  });
});
