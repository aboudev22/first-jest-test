const isPrime = require("./isPrime");

test("2 is prime", () => {
  expect(isPrime(2)).toBeTruthy();
});

test("4 not prime", () => {
  expect(isPrime(4)).toBeFalsy();
});

test("17 is prime", () => {
  expect(isPrime(17)).toBeTruthy();
});

test("1 is not prime", () => {
  expect(isPrime(1)).toBeFalsy();
});
