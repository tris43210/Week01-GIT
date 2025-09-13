console.log(`TEST`);

// two main types of loops `for` and `while`

// basic for loop:

for (let i = 0; i < 5; i++) {
    console.log(`iterate 5 times`);
}

// basic while loop 
// Must have an incriment in the while loop otherwise will cause inifinite loop

let counter = 0;

while(counter <= 5) {
    console.log(`basic while iteration is ${counter}`);
    counter++;
}


// Randowm while loop iteration with math.random() which spits out a random floating point number when this is anything greater than 0 (so 0.0001) keep looping is `true` and while loop stops. 

let keepLooping  = false; 
let iteration = 0;

while (keepLooping === false ) {
    keepLooping = Math.random() < 0.01
    console.log(`random iteration ${iteration++}`); 
}

// Looping through Arrays using for Loops

const myFoods =  [`pizza`, `choc`, `ice-cream`, `cheese`]; 

for(let ii = 0; ii < 3; ii++) {
    console.log(`array iteration item: ${myFoods[ii]}`)
};


// Other ways to loop through arrays using variations of the for loop:

// first method is the for of loop:

for (let idk of myFoods) {
    console.log(`for of idk ${idk}`);
}

// Second is the .forEach Method which works only on Arrays and takes a function as an argument which is called for each item in the array. 

// food is taken as an argument as this will the item that changes each time the function runs. 

myFoods.forEach(function(food) {
    console.log(`for each item is ${food}`); 
})

// Example with index number

myFoods.forEach(function(food, index) {
    console.log(`for each item is ${food} & index number is ${index}`); 
})

// Stretch Example: 

const myFavAnimals = [`dog`, `rabbit`, `bird`, `penguin`]; 

myFavAnimals.forEach(function(animal, index) { 
    console.log(`my fav animimal is a ${animal} its item number is ${index}`); 
}); 

