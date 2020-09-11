const CustomError = require("../extensions/custom-error");





module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = 2 ** disksNumber - 1;
  const turnsSpeedInSeconds = turnsSpeed / 3600;
  const secondsCount = Math.floor(turnsCount / turnsSpeedInSeconds); 
  return {turns:turnsCount, seconds: secondsCount}

};
