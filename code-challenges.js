// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple";
const fruit2 = "banana";
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry";
const fruit4 = "kiwi";
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: created conditional statement that will output requested data.
var boilingPoint = 212;
const temp1 = 42;
if (temp1 == boilingPoint) {
  console.log(`${temp1} is at boiling point`);
} else if (temp1 < boilingPoint) {
  console.log(`${temp1} is below boiling point`);
} else if (temp1 > boilingPoint) {
  console.log(`${temp1} is above boiling point`);
} else {
  console.log("Error");
}
// Expected output: "42 is below boiling point"

const temp2 = 350;
if (temp2 == boilingPoint) {
  console.log(`${temp2} is at boiling point`);
} else if (temp2 < boilingPoint) {
  console.log(`${temp2} is below boiling point`);
} else if (temp2 > boilingPoint) {
  console.log(`${temp2} is above boiling point`);
} else {
  console.log("Error");
}
// Expected output: "350 is above boiling point"

const temp3 = 212;
if (temp3 == boilingPoint) {
  console.log(`${temp3} is at boiling point`);
} else if (temp3 < boilingPoint) {
  console.log(`${temp3} is below boiling point`);
} else if (temp3 > boilingPoint) {
  console.log(`${temp3} is above boiling point`);
} else {
  console.log("Error");
}
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: not sure if this is correct, since its a console.log combining the two arrays and outputing the combines number of index

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
console.log(
  padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length
);
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: i want to reverse the order of the values in the array. therefore console.log(currentCohort.reverse()) should work.. but it's a string.
// so, i researched what to do and found a method to split the string into an array an reverse it and join it all back into a string.

const currentCohort = "Golf 2022";
// Step 1. Use the split() method to return a new array
var splitString = currentCohort.split("");
// Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse();
// Step 3. Use the join() method to join all elements of the array into a string
var joinArray = reverseArray.join("");
//Step 4. Return the reversed string
console.log(joinArray);
// Expected output: "2202 floG"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: .lastIndexOf() returns the last of a given value

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];
const givenValue1 = 42;
console.log(myNumbers.lastIndexOf(42));
// Expected output: 7

const givenValue2 = 10;
console.log(myNumbers.lastIndexOf(10));
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: First i need to sort the numbers and desided to reverse the order therefor resulting in a list from largest to smallest.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
sanDiegoSummerTemperatures.sort((a, b) => a - b);
console.log(sanDiegoSummerTemperatures.reverse());
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
sanDiegoWinterTemperatures.sort((a, b) => a - b);
console.log(sanDiegoWinterTemperatures.reverse());
// Expected output: [68, 67, 66, 66, 62, 59, 59]
