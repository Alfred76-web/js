// Array of favorite fruits
let fruits = ["apple", "banana", "mango", "orange", "grape"];

// Log each fruit using a loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Add a new item and remove the first item
fruits.push("pineapple");
fruits.shift();
console.log("Updated array:", fruits);

// Find the index of a specific item
let searchItem = "banana";
let index = fruits.indexOf(searchItem);
if (index !== -1) {
  console.log(searchItem + " is at index " + index);
} else {
  console.log(searchItem + " is not found in the array.");
}