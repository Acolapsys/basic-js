const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {

  let result = [].concat(...backyard);
  return result.reduce((acc, i) => acc + (i === "^^"), 0)
};
