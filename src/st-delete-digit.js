import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  let i = 1;
  while (Math.trunc(n / i) > 0) {
    let temp = Math.trunc(n / (i * 10)) * i + (n % i);
    i *= 10;
    result = Math.max(result, temp);
  }
  return result;
}