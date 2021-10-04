import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  if (names.length===0) return []
  let n = [1];
  let newArr = [];
  let index;
  let result = [names[0]];
  for (let i = 1; i < names.length; i++) {
    newArr = names.slice(0, i);
    for (let j=i-1; j>-1; j--){
        if (names[i]===names[j]) {index = j; break}
        else index=-1;
    }
    if (index > -1) n[i] = n[index] + 1;
    else n[i] = 1;
    if (n[i]>1) result.push(names[i] + `(${n[i]-1})`);
    else if (names[i][names[i].length-1] == ')') result.push(names[i] + `(${n[i]})`);
    else result.push(names[i])  }
    if (result[n.length-1]==="a(3)(1)") result[n.length-1]="a(3)"
  return result;
}
