// Convert a string to uppercase
let string = "hello world";
let uppercaseString = string.toUpperCase();
console.log("Uppercase string:", uppercaseString);

// Extract a substring
let originalString = "JavaScript is fun";
let substring = originalString.substring(10, 13);
console.log("Substring:", substring);

// Check if a string contains a specific word
let sentence = "I love programming";
let wordToCheck = "love";
let containsWord = sentence.includes(wordToCheck);
if (containsWord) {
  console.log("The sentence contains the word \"love\".");
} else {
  console.log("The sentence does not contain the word \"love\".");
}