console.log(`testinggg`);

// local scope (variables inside the funciton are local to that function)

function sayHello() {
  const myName = `Tristan`;
  document.body.innerHTML = `Helloo my name is, ${myName} and i'm affected by the style.css document`;
}

// Does not work as myName is decarled insdie the function.
