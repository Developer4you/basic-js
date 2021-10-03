import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOGARITHM_OF_TWO = 0.693;

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
export default function dateSample(sampleActivity) {
  if ((typeof sampleActivity!='string')) return false
  const parsedActiviti = parseFloat(sampleActivity)
  if (isNaN(parsedActiviti) || (0>=parsedActiviti) || (MODERN_ACTIVITY<=parsedActiviti) ) return false
  return Math.ceil((Math.log(MODERN_ACTIVITY/parsedActiviti)/(LOGARITHM_OF_TWO/HALF_LIFE_PERIOD)))
}
