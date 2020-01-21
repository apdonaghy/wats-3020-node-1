


let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();



if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 4-hours-to-minutes <integer>");
} 

 else {
   let hours = (input / 60).toFixed();
   let minutes = input % 60;
   let hrs = (hours == 1) ? "hour" : "hours";
   let mins = (minutes == 1) ? "minute" : "minutes";
  console.log(`${input} minutes is ${hours} ${hrs} ${minutes} ${mins} `)
}
