import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
let s, ss;
  if (s1.length < s2.length) {
    s = s2.split("");
    ss = s1.split("");
  } else {
    s = s1.split("");
    ss = s2.split("");
  }
  let summ = 0;
  let i = 0;
  let index, a, b;
  while (i < ss.length) {
    a = ss[i];
    index = s.indexOf(a);
    if (index > -1) {
      b = s[index];
      s.splice(index, 1);
      summ++;
    }
    i++;
  }

  return summ;
}
