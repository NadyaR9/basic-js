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

// transform(3),
//   transform(3.312312),
//   transform(false),
//   transform(null),
//   transform(undefined),
//   transform({
//     'foo': 'bar'
//   })
transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, 4, 5, '--double-next']);

// transform(['--double-prev', 4, 2, 3]);
// transform([1, 2, '--discard-next', 3]);

function preTransform(resultArr, index) {
  // switch (index) {
  //   case 0:
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] === index) {
      if (index === '--discard-next') {
        if (i != resultArr.length - 1) {

          resultArr.splice(i + 1, 1);
          resultArr.splice(i, 1);
        } else {
          resultArr.splice(i, 1);
        }
      }

      //   break;
      // case 1:
      if (index === '--discard-prev') {
        if (i != 0) {
          resultArr.splice(i, 1);
          resultArr.splice(i - 1, 1);
        } else {
          resultArr.splice(i, 1);
        }
      }
      // if (i != 0) {
      //   resultArr.splice(i, 1);
      //   resultArr.splice(i - 1, 1);
      // } else {
      //   resultArr.splice(i, 1);
      // }

      // break;
      // case 2:
      if (index === '--double-next') {
        if (i != resultArr.length - 1) {
          resultArr.splice(i, 1, resultArr[i + 1]);
        } else {
          resultArr.splice(i, 1);
        }
      }


      //   break;
      // case 3:
      if (index === '--double-prev') {
        if (i != 0) {
          resultArr.splice(i, 1, resultArr[i - 1]);
        } else {
          resultArr.splice(i, 1);
        }
      }
    }
  }


  //     break;
  // }
  return resultArr;
}
export default function transform(arr) {
  let resultArr = [];
  let result = [];
  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return [];
    } else {
      for (let item of arr) {
        resultArr.push(item);
      }
      let count = 0;
      for (let item of arr) {
        for (let control of controls) {
          if (control === item) {
            // for (let i = 0; i < resultArr.length; i++) {
            //   if (resultArr[i] === control) {
            //     resultArr = preTransform(resultArr, control, i);
            //     continue;
            //   }
            // }
            console.log(resultArr);
            resultArr = preTransform(resultArr, control);
            console.log(resultArr);

          }
        }
      }
      //console.log(resultArr);
      return resultArr;
    }
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
}
// for (let k=0; k<count;k++) {
//   for (let i = 0; i < resultArr.length; i++) {
//     //console.log(resultArr.length);

//     for (let j = 0; j < controls.length; j++) {

//       if (resultArr[i] === controls[j]) {
//         result = preTransform(resultArr, j,  )
//       }
//     }
//   }
// }
// for (let i = 0; i < resultArr.length; i++) {
//   //console.log(resultArr.length);

//   for (let j = 0; j < controls.length; j++) {

//     if (resultArr[i] === controls[j]) {

//       console.log(resultArr[i]);
//       console.log(i);
// switch (j) {
//   case 0:
//     if (i != resultArr.length - 1) {

//       resultArr.splice(i + 1, 1);
//       resultArr.splice(i, 1);
//     } else {
//       resultArr.splice(i, 1);
//     }
//     break;
//   case 1:
//     if (i != 0) {
//       resultArr.splice(i, 1);
//       resultArr.splice(i - 1, 1);
//     } else {
//       resultArr.splice(i, 1);
//     }

//     break;
//   case 2:
//     if (i != resultArr.length - 1) {
//       console.log(i);
//       resultArr.splice(i, 1, resultArr[i + 1]);
//     } else {
//       resultArr.splice(i, 1);
//     }

//     break;
//   case 3:
//     if (i != 0) {
//       resultArr.splice(i, 1);
//       resultArr.splice(i - 1, 1, resultArr[i - 1]);
//     } else {
//       resultArr.splice(i, 1);
//     }

//     break;
// }