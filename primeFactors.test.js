const primeFactors = require("./primeFactors");

test("2 - array of factors is [2]", () => {
  expect(primeFactors(2)).toEqual([2]);
});

test("10 - array of factors is [2, 5]", () => {
  expect(primeFactors(10)).toEqual([2, 5]);
});

test("11 - array of factors is [11]", () => {
  expect(primeFactors(11)).toEqual([11]);
});

test("100 - array of factors is [2, 2, 5, 5]", () => {
  expect(primeFactors(100)).toEqual([2, 2, 5, 5]);
});

test("0 - array of factors is []", () => {
  expect(primeFactors(0)).toEqual([]);
});
