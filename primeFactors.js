/**
 * Returns the array of prime factors of a given number
 *
 * @param {number} n - The number to factorize.
 * @returns {number[]} an array containing the prime factors of n.
 */

function primeFactors(n) {
  if (n <= 0) return [];

  const factors = [];

  while (n % 2 == 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i = i + 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

module.exports = primeFactors;
