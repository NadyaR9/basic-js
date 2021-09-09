import {
  NotImplementedError
} from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function isANumber(str) {
  return !/\D/.test(str);
}
console.log(isANumber('one'));
export default function dateSample(sampleActivity) {
  if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) {
    return false
  } else {
    if (typeof (sampleActivity) === 'string') {
      if (isANumber(sampleActivity.replace('.', ''))) {
        return Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD) / Math.LN2);
      } else {
        return false
      }
    } else {
      return false
    }
  }
}