// drivers program

let isRoadLegal = false;
let age = Number(prompt(`please enter your age`));
const legalDrivingAge = 17;

if (age >= legalDrivingAge) {
  isRoadLegal = true;
} else {
  isRoadLegal = false;
}

console.log(`Are you legal to drive: ${isRoadLegal}`);

// Movie Ratings

let movieRating = prompt(`Please enter the Rating of the Movie`);

if (age >= 18) {
  console.log(`You can watch any movie you wish!`);
} else if (movieRating === `PG` && age === 17) {
  console.log(`You can watch any movie with Parental Guidance`);
} else if (age < 17 || movieRating != `PG`) {
  console.log(`You are not old enough to watch the movie`);
}

// Alternative Method

/*
let movieRating = prompt(`Please enter the Rating of the Movie`);

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age === 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  }
}
*/
