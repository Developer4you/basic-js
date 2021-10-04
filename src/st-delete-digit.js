import { NotImplementedError } from '../extensions/index.js';

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
  let max=0;
     let numStrArr = n.toString().split('');
     let tempArr = [...numStrArr];
     for (let i=0; i<numStrArr.length; i++) {
         tempArr.splice(i,1)
         if (Number (tempArr.join('')) > max) max = Number (tempArr.join(''))
         tempArr = [...numStrArr];
     }
     return max
   }
