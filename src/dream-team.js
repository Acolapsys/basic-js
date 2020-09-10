const CustomError = require("../extensions/custom-error");





module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let cypher = members.reduce((names, name) => {
    if (typeof name !== 'string') return names;  
    return names + name.replace(/\s+/g, '').toUpperCase()[0];   
  }, "")
 return cypher.split("").sort().join("");
};
