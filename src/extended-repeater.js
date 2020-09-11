const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const addition = (options.addition !== undefined) ? String(options.addition) : ''; 
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const repeatTimes = options.repeatTimes || 1;
  const addArray = new Array(additionRepeatTimes).fill(addition);
  const add = addArray.join(additionSeparator)
  const resultArray = new Array(repeatTimes).fill(str + add)
  const result = resultArray.join(separator)

  return result

};
  