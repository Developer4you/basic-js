import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || Object.keys(date).length) throw new Error('Invalid date!');
  if ((date.getMonth()+1)>2 && 6>(date.getMonth()+1)) return "spring";
  if ((date.getMonth()+1)>5 && 9>(date.getMonth()+1)) return "summer";
  if ((date.getMonth()+1)>8 && 12>(date.getMonth()+1)) return "autumn";
  if ((date.getMonth()+1)===12 || (date.getMonth()+1)===1 || (date.getMonth()+1)===2) return "winter";
}
