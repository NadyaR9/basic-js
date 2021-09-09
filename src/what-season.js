import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function isValidDate(date) {
  let result;
  try {
    result = date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
  } catch {
    throw new Error('Invalid date!');
  }
  return result;
}
// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };
// const deeperFakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//     return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//     return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//     return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//     return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//     return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//     return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//     return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//     return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };
// console.log(isValidDate(fakeDate));
// console.log(isValidDate(deeperFakeDate));
// console.log(isNaN(new Date()));
// console.log(isNaN(fakeDate));
// console.log(isNaN(deeperFakeDate));
// console.log(getSeason(fakeDate));
// console.log(getSeason(deeperFakeDate));
export default function getSeason(date) {
  let month;
  let season = '';
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!'
  }
  if (isValidDate(date)) {
    month = date.getMonth();
    switch (month) {
      case 0:
      case 1:
        season = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer';
        break;
      case 8:
      case 9:
      case 10:
        season = 'fall';
        break;
      case 11:
      case 12:
        season = 'winter';
        break;
      default:
        season = 'Unable to determine the time of year!';
    }
    return season;
  } else {
    throw new Error('Invalid date!');
  }
}