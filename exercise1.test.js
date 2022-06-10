const handleString = require('./exercise1');

describe('exercise 1', () => {
  test.each([
    ['AAAA', 3],
    ['BBBBB', 4],
    ['ABABABAB', 0],
    ['BABABA', 0],
    ['AAABBB', 4],
  ])('input: %p; expected output: %p', (case_, result) => {
    expect(handleString(case_)).toBe(result);
  });
});
