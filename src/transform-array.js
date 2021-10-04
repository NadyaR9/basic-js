// import {
//   NotImplementedError
// } from '../extensions/index.js';

// /**
//  * Create transformed array based on the control sequences that original
//  * array contains
//  * 
//  * @param {Array} arr initial array
//  * @returns {Array} transformed array
//  * 
//  * @example
//  * 
//  * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
//  * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
//  * 
//  */

// function preTransform(resultArr, index) {
//   for (let i = 0; i < resultArr.length; i++) {
//     if (resultArr[i] === index) {
//       if (index === '--discard-next') {
//         if (i != resultArr.length - 1) {

//           resultArr.splice(i + 1, 1);
//           resultArr.splice(i, 1);
//         } else {
//           resultArr.splice(i, 1);
//         }
//       }
//       if (index === '--discard-prev') {
//         if (i != 0) {
//           resultArr.splice(i, 1);
//           resultArr.splice(i - 1, 1);
//         } else {
//           resultArr.splice(i, 1);
//         }
//       }
//       if (index === '--double-next') {
//         if (i != resultArr.length - 1) {
//           resultArr.splice(i, 1, resultArr[i + 1]);
//         } else {
//           resultArr.splice(i, 1);
//         }
//       }
//       if (index === '--double-prev') {
//         if (i != 0) {
//           resultArr.splice(i, 1, resultArr[i - 1]);
//         } else {
//           resultArr.splice(i, 1);
//         }
//       }
//     }
//   }
//   return resultArr;
// }
// export default function transform(arr) {
//   //throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
//   let resultArr = [];
//   let result = [];
//   const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
//   if (Array.isArray(arr)) {
//     if (arr.length === 0) {
//       return [];
//     } else {
//       for (let item of arr) {
//         resultArr.push(item);
//       }
//       let count = 0;
//       for (let item of arr) {
//         for (let control of controls) {
//           if (control === item) {
//             resultArr = preTransform(resultArr, control);
//           }
//         }
//       }
//       return resultArr;
//     }
//   } else {
//     throw new Error('\'arr\' parameter must be an instance of the Array!')
//   }
// }
import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( /* arr */ ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}