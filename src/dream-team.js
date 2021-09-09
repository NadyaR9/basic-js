import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let name = [];
  let stringWithoutSpaces = '';
  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof (member) === 'string') {
        stringWithoutSpaces = member.trim();
        name.push(stringWithoutSpaces[0]);
      }
    }
  } else {
    return false
  }
  return name.join().toUpperCase().split(",").sort().join("");
}