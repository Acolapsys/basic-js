const CustomError = require("../extensions/custom-error");





module.exports = function getSeason(date) {
  try {
    if (date === undefined) return "Unable to determine the time of year!";
    let time = date.getTime();
    let season = date.getMonth();    
    if (season === 0 || season === 1 || season === 11) return "winter";
    if (season === 2 || season === 3 || season === 4) return "spring";
    if (season === 5 || season === 6 || season === 7) return "summer";
    if (season === 8 || season === 9 || season === 10) return "autumn";
  } catch (e) {
    throw "THROWN"
  }




 


};
