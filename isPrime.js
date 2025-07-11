/**
 * Primaly test
 * @param {number} n - The integer to test.
 * @returns {Boolean} True if the number is prime, false otherwise.
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

module.exports = isPrime;
