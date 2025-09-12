// declaring a object:

const aboutMe = {
  name: `Tristan`,
  Age: 26,
  Height: `5,11`,
  Hobbies: [`Music Production`, `Playing the Piano`, `Coding`],
  Sports: [`Badminton`, `Running`, `Swimming`],
};

// Accesing Item from the object

for (let i = 0; i < aboutMe.Hobbies.length; i++) {
  console.log(`I Enjoy ${aboutMe.Hobbies[i]}`);
}
