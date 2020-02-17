let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();


if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 2-odd-even <integer>");
} 

else {
  
  if (input % 3 == 0 || input % 7 == 0) {
   
console.log(`${input} is divisible by 3 or 7`)
  } else {
    console.log(`${input} is not divisible by 3 or 7`)
  }
}
