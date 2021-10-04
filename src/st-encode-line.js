import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let count = 1;
  let resultString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      resultString += count === 1 ? str[i] : count + str[i];
      count = 1;
    }
  }
  return resultString;
}