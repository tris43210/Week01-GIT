// basic click and mousedown Event

console.log(`tesssttt`);
const button = document.getElementById(`btn`);
const button2 = document.getElementById(`btn2`);
const button3 = document.getElementById(`btn3`);
const container = document.getElementById(`container`);

function btnChange() {
  console.log(`this works`);
}

function btnOver() {
  console.log(`this is what happens over a btn`);
}

button.addEventListener(`click`, btnChange);
button.addEventListener(`mouseover`, btnOver);

// anonymous function events - only use if the function is specific to the event and not being used anywhere else.

button.addEventListener(`mouseover`, function () {
  console.log(`this is a anonymous mouseover`);
});

// Experimenting

button2.addEventListener(`mousedown`, function () {
  const newDiv = document.createElement(`div`);
  newDiv.setAttribute(`class`, `littleSquare`);
  container.append(newDiv);
});

button2.addEventListener(`mouseleave`, function () {
  const littleSquareClass = document.querySelector(`.littleSquare`);
  littleSquareClass.remove;
});
