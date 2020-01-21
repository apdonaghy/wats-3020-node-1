
let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();


if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 2-odd-even <integer>");
} 

else {
  
  if (input % 2 == 0) {
   
console.log(`${input} is even!`)
  } else {
    console.log(`${input} is odd!`)
  }
}

