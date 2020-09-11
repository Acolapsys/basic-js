const CustomError = require("../extensions/custom-error");






module.exports = function transform(arr) {
  if (arr.length === 0) return [];
  let newArr = arr.map(x => x)
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case `--discard-next`: 
        if (i !== arr.length - 1) newArr[i + 1] = null;
        newArr[i] = null;        
        break;
      case `--discard-prev`:
        if (i !== 0) newArr[i - 1] = null;
        newArr[i] = null;        
        break;
      case `--double-next`:
        if (i !== arr.length - 1) newArr[i] = newArr[i + 1];
        else newArr[i] = null;
        break;
      case `--double-prev`:
        if (i !== 0) newArr[i] = newArr[i - 1];
        else newArr[i] = null;        
        break;
    }

  }
  return newArr.filter((currentValue) => currentValue !== null)



};
