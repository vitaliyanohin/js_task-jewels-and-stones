'use strict';

const calculate = require('./numJewelsInStones');

test('Should ignore chars in another case', () => {
  expect(calculate('z', 'ZZZZZZ'))
    .toBe(0);
});

test('Should return correct count of jewels in stones', () => {
  expect(calculate('zZA', 'ZaZaAAazzzz'))
    .toBe(8);
});
