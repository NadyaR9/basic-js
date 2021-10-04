import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
//sortByHeight([-1, 150, 160, 170, -1, -1, 180, 190])
export default function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const sortArray = [],
    resultArray = [];
  for (let item of arr) {
    if (item !== -1) {
      sortArray.push(item);
    }
  }
  sortArray.sort((a, b) => a - b);
  console.log(arr)
  console.log(sortArray)
  for (let item of arr) {
    (item !== -1) ? resultArray.push(sortArray.shift()): resultArray.push(-1);
  }
  return resultArray;
}