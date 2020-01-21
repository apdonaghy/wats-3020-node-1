
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()


if (!input) {
console.log("usage: node 3-string-contains-hello <string>")
console.log("To include spaces, use quotes.")
}


else {

  if (input.indexOf('hello') > -1) {
    console.log(`hello was found at position ${input.indexOf('hello')} of the string (input)`);
  } else {
    console.log(`hello was not found in the string ${input}`)
  }
}