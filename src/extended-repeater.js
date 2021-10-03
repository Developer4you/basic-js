import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(
  str,
  { separator = "+", additionSeparator = "|", addition ,...options }
) {
  str = new String(str);
  addition = new String(addition);
  if ((!options.additionRepeatTimes&&!options.repeatTimes)&&(addition)) return str+addition

  function getSeseparator(inStr, sep, times) {
    if (!times) return inStr!='undefined'?inStr:'';
    let newStr = inStr;
    let i=1
      while (i < times) {
        newStr += sep+inStr;
        i++
      }
    return newStr;
  }

  function getFinalString(str, sep, newSep, times) {
    if (!times) return str;
    let i=1;
    let newStr = str+newSep;
    while (i < times) {
      newStr += sep+str+newSep;
      i++
    }
    return newStr;
  }

  let result;
  let newSeparator;
  
  newSeparator = getSeseparator(
        addition,
        additionSeparator,
        options.additionRepeatTimes
      );

  result = getFinalString(str, separator, newSeparator, options.repeatTimes)

  return result;
}
