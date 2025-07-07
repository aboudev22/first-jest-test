const isPrime = require("./isPrime");

test("2 is prime", () => {
  expect(isPrime(2)).toBe(true);
});

test("4 not prime", () => {
  expect(isPrime(4)).toBe(false);
});

test("17 is prime", () => {
  expect(isPrime(17)).toBe(true);
});

test("1 is not prime", () => {
  expect(isPrime(1)).toBe(false);
});
