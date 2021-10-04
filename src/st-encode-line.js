import { NotImplementedError } from '../extensions/index.js';

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
  let arr = str.split('')
  let result = '';
  let n=1;
  let nn;
  for (let i=1; i<arr.length;i++){
      if (arr[i-1]===arr[i]) n++
      else {
          result += (n===1?'':n)+arr[i-1];
          n=1;
      }
      if (i===arr.length-1) result += (n===1?'':n) +arr[i];
  }
  return result
}
