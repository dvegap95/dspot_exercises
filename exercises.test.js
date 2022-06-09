const handleString = require('./exercise1');
const orderCards = require('./exercise2');
const orderCards_pp = require('./exercise2++');

const input2_1 = require('./exercise2_i1.json');
const input2_2 = require('./exercise2_i2.json');

describe('Algorithmic exercises tests', () => {
  test('exercise 1 handleString function', () => {
    let cases = [
      { str: 'AAAA', result: 3 },
      { str: 'BBBBB', result: 4 },
      { str: 'ABABABAB', result: 0 },
      { str: 'BABABA', result: 0 },
      { str: 'AAABBB', result: 4 },
    ];

    cases.forEach((case_) => {
      let r = handleString(case_.str);
      expect(r).toBe(case_.result);
    });
  });
  test('exercise 2 orderCards function', () => {
    expect(orderCards(input2_1)).toBe(2);
    expect(orderCards(input2_2)).toBe(0);
  });
  test('exercise 2++ (improved answer) orderCards_pp function', () => {
    expect(orderCards(input2_1)).toBe(2);
    expect(orderCards(input2_2)).toBe(0);
  });
});
