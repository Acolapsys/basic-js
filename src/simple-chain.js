const CustomError = require("../extensions/custom-error");





const chainMaker = {

  getLength() {
    return this.value.split("~~").length;

  },
  addLink(val) {
    if (this.value === undefined) this.value = `( ${val} )`;
    else this.value = this.value.split('~~').concat(`( ${val} )`).join("~~")
    return this
  },
  removeLink(position) {
    try {
      if (position <= 0 || position > this.getLength() || !+position) throw new Error("THROWN")
      this.value = this.value.split("~~").filter((el, index) => index !== (position - 1)).join("~~");
      return this;
    }
    catch (e) {
      this.value = undefined
      throw "THROWN"
    }
  },
  reverseChain() {
    if (this.value === undefined) return this
    this.value = this.value.split("~~").reverse().join("~~");
    return this
  },
  finishChain() {
    let result = this.value
    this.value = undefined
    return result;
  }
};

module.exports = chainMaker;
