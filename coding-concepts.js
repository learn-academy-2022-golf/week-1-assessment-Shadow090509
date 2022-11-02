// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"];
console.log(colors.push("indigo"));

// a) Your answer: 5
// b) Verify and explain: output of the method will provide the length of the new array.

// --------------------1) What will this log?

const cohort = "LEARN 2022";
console.log(cohort.length);

// a) Your answer: 10
// b) Verify and explain: .length is set to return the number of elements in that array.

// --------------------2) What will this log?

const greeting = "Hello World!";
console.log(greeting[4]);

// a) Your answer: o
// b) Verify and explain: the string method console.log(greeting[4] will reference the single character from the string by the index provided)

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"];
const index = 1;
console.log(languages[index]);

// a) Your answer: Ruby
// b) Verify and explain: console.log(languages[]) will reference what is provided in the index which is in this case, 1.

// --------------------4) What will this log?

const weekendDays = "saturday sunday";
console.log(weekendDays.toUpperCase());

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: error messege saying that .toUpperCase() is not a function. upon further research, the command .toUpperCase is intended for strings and not realley arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"];
console.log(typeof dataTypes.length);

// a) Your answer: 4
// b) Verify and explain: "number" It is expressing the typeof values in this array is in number form.
