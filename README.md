# WATS 3020 Node 1

This exercise has been developed to give you an opportunity to work with declaring and assigning variables along with creating simple conditional expressions. There are five separate sections, separated into separate folders:
* `1-experiments`: small experiments that help demonstrate how different types of variables work in JavaScript.
* `2-odd-even`: a basic program that takes a number as input and determines whether the number is even or odd.
* `3-string-contains-hello`: a basic program that takes a string as input and reports whether the string contains the word `hello` in it.
* `4-hours-to-minutes`: a basic program that takes a number (minutes) as input and converts the number to the correct number of hours and minutes.
* `5-mini-app`: a custom mini-app that you will develop that is similar to the previous programs.

This assignment uses the local module **getargs** to pull a single argument out of the command line for input and `console.log(<string>)` for all output.

## Topics covered by this Assignment

* [Variables and Variable Declaration](./reference.md#Variable%20Declaration)
* [Data Types: number, string, boolean, Primitive types vs Object types](./reference.md#Variable%20Types)
* [Methods for working with strings](./reference.md#String%20Methods)
* [Operators](./reference.md#Operators)
* [Logic and Logical Expressions](./reference.md#Logic)
* [If/Then/Else Statements](./reference.md#if/else)
* [Ternary Operators](./reference.md#Ternary%20Operators)
* [Template Literals](./reference.md#Template%20Literals)

Read more about these topics in the local file [reference.md](./reference.md).

## Basic Requirements

In order to complete this project successfully, you will need to fulfill these requirements:
* Go through `index.js` in the `1-experiments` folder, complete all of the TODOs, and observe the output.
* Complete the conditional logic and console output statements in `index.js` in the `2-odd-even` folder such that the program identifies whether a number input is even or odd and reports accordingly.
* Complete the conditional logic and console output statements in `index.js` in the `3-string-contains-hello` folder such that the program properly reports whether a string contains the `hello`.
* Complete the conditional logic, variable declarations, and correct calculations in `index.js` in the `4-hours-to-minutes` folder such that the program properly converts a whole number of minutes into the correct number of hours and minutes.
* Write a small JavaScript program in `index.js` in the `mini-app` folder that meets these requirements:
  * Reads an argument from the command line;
  * Provides a usage statement if the input is in not correct; 
  * Uses an if/then statement; and
  * Uses at least one operator (+, -, *, /, %)

## Guide & Tutorial
For assistance in how to proceed with the specific components of the assignment, consult this [text tutorial](./tutorials.md) for more guidance. In the alternative, a video walkthrough of the assignment can be found [here](https://youtu.be/Fclm_KgSig8). Timestamps for specific parts of the assignment (with associated links) are as follows:
* [3:05 - Part 1 of 5, `1-experiments`](https://youtu.be/Fclm_KgSig8?t=186)
* [21:20 - Part 2 of 5, `2-odd-even`](https://youtu.be/Fclm_KgSig8?t=1280)
* [32:06 - Part 3 of 5, `3-string-contains-hello`](https://youtu.be/Fclm_KgSig8?t=1926)
* [39:18 - Part 4 of 5, `4-hours-to-minutes`](https://youtu.be/Fclm_KgSig8?t=2358)
* [46:13 - Part 5 of 5, `5-mini-app`](https://youtu.be/Fclm_KgSig8?t=2773)

## Stretch Goals

1. Use the `prompt` and `console.log` commands and implement your mini-app in a web page.
2. Create an app to determine if a number is divisible by 3 or 7.
3. Research the string methods and write an app that uses the search or substr method to find a string within a string.
4. Research the string methods and write an app the determines how long a string is.
5. Research the number methods and write an app the converts a string containing a integer into a numeric integer.  This is a useful bit of code, since we often pull strings off the web when accessing data and need to convert it into numbers in our code.

