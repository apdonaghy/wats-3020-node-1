let input = parseInt(prompt("enter bytes to convert to kilobytes"));
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 5-mini-app <integer>");
} else {
  let bytes = input % 1024;
  let kilobytes = ((input - bytes) / 1024).toFixed()
  let klo = (kilobytes == 1) ? "kilobyte" : "kilobytes";
  let bts = (bytes == 1) ? "byte" : "bytes";
  console.log(`${input} bytes is ${kilobytes} ${klo} and ${bytes} ${bts} `)
}