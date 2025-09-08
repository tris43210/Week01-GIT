// Lil Welcome

const firstname = prompt(`please enter your firstname`);
const surname = prompt(`please enter your surname`);

function sayHello(fn, sn) {
  document.body.innerHTML = `Hello, ${fn} ${sn}`;
}

sayHello(firstname, surname);

// returning Values from functions

function calculator(a, b) {
  return a + b;
}

const returnedValue = calculator(3, 7);

if (returnedValue === 10) {
  console.log(`this works`);
} else {
  console.log(`this need work`);
}
