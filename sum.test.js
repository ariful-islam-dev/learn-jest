const sum = require('./sum');

test('Function is working correctly', () => {
  expect(sum(1, 4)).toBe(5);
});