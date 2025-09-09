console.log(`testing....`);

const myArray = [
  `my first blog post`,
  `my second blog post`,
  `my third blog post`,
];

// Accessing Array item is called indexing where 0 is item 1

console.log(myArray[0]);

// Arrays can have different data types stored within:

const randomDataArray = [1, `item 2`, true];
console.log(randomDataArray[1]);

// WS task

const favoriteFood = [`Donna Kebab`, `Madras Curry`, `Fish & Chips`];
console.log(favoriteFood);

// There are various methods we can use specific to Arrays:

favoriteFood.push(`Chinease`);
console.log(favoriteFood); // Adds an item to the end of the array

favoriteFood.pop();
console.log(favoriteFood); // Removes Last Item

favoriteFood.unshift(`Pub food`);
console.log(favoriteFood); // adds a item to the start of the list

favoriteFood.shift();
console.log(favoriteFood); // Removes an item from the start of the list.

console.log(`the array's length is: ${favoriteFood.length}`);

// Checks the length of the Array;
