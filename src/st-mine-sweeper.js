import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let n=0;
  let resArr=matrix.map(el => [].concat(el));
for (let i=0; i<matrix.length; i++)
  for (let j=0; j<matrix[i].length; j++) {
    if (i>0 && j>0 && (matrix[i-1][j-1]===true)) n++
    if (i>0 && (matrix[i-1][j]===true)) n++
    if (i>0 && j<matrix[i].length-1 && (matrix[i-1][j+1]===true)) n++
    if (j>0 && (matrix[i][j-1]===true)) n++
    if (j<matrix[i].length-1 && (matrix[i][j+1]===true)) n++
    if (i<matrix.length-1 && j>0 && (matrix[i+1][j-1]===true)) n++
    if (i<matrix.length-1 && (matrix[i+1][j]===true)) n++
    if (i<matrix.length-1 && j<matrix[i].length-1 && (matrix[i+1][j+1]===true)) n++
    
  resArr[i][j]=n;
  n=0;
  }
return resArr
}
