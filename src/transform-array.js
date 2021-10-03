import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let a = [...arr];

  for (let i=0; i<a.length; i++){
    if ((i<a.length-1)&&(a[i]==='--discard-next')&&(a[i+2]==='--double-prev')) {a.splice(i, 3)};
    if ((i<a.length-1)&&(a[i]==='--discard-next')&&(a[i+2]==='--discard-prev')) {a.splice(i, 3)};
    if ((i>0)&&(a[i]==='--discard-prev')) {a.splice(i-1, 2)};
    if ((i<a.length-1)&&(a[i]==='--discard-next')) {a.splice(i, 2)};    
    if ((i===0)&&(a[i]==='--discard-prev')) a.splice(i, 1);
    if ((i===a.length-1)&&(a[i]==='--discard-next')) a.splice(i, 1);
    if ((i>0)&&(a[i]==='--double-prev')) a[i]=a[i-1];
    if ((i<a.length-1)&&(a[i]==='--double-next')) a[i]=a[i+1];
    if ((i===0)&&(a[i]==='--double-prev')) a.splice(i, 1);
    if ((i===a.length-1)&&(a[i]==='--double-next')) a.splice(i, 1);
  }

    return a
}
