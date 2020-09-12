const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction
  }
  encrypt(message, key) {
    let result  =  '';
    key = key.repeat(Math.ceil(message.length / key.length));
    let i = 0;
    let j = 0;
    message = message.toUpperCase()
    key = key.toUpperCase()
    while (i < message.length) {
      if (message[i].match(/[A-Z]/)) result += String.fromCharCode(((message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26) + 65)
      else {
        result += message[i];
        i++;
        continue;
      }
      i++
      j++
    }
    return this.direction ? result : result.split('').reverse().join('')
  }    
  decrypt(message, key) {
    let result  =  '';
    key = key.repeat(Math.ceil(message.length / key.length));
    let i = 0;
    let j = 0;
    message = message.toUpperCase();
    key = key.toUpperCase()
    while (i < message.length) {
      if (message[i].match(/[A-Z]/)) result +=  String.fromCharCode(((message.charCodeAt(i) + 26 - key.charCodeAt(j)) % 26) + 65)
      else {
        result += message[i];
        i++;
        continue;
      }
      i++
      j++
    }
    return this.direction ? result : result.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
