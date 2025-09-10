console.log(`hello world`);

// In this example the second function takes an argument which invokes a function somewhere in the code at the end when the `myAwesomeFunction` is called it states that function should be notify user.

function notifyUser() {
  console.log(`notifyUser fucntion was called!`);
}

function myAwesomeFunction(notifyUserCallback) {
  console.log(`running awesomeFunction...doing complex tasks...`);
  console.log(`complex task complete. I will notify the user`);
  notifyUserCallback();
}

myAwesomeFunction(notifyUser);

// annoymous funciton callback (without a given name) basic syntax:

function original(a) {
  a();
}

original(function () {
  console.log(`helloo to the callback`);
});

// Same as example 1 but the second function does not have a name so it is annoymous

function myAwesomeFunctionv2(onCompleteCallback) {
  console.log("Running myAwesomeFunctionV2... doing complex tasks...");
  console.log("Complex task complete. I will notify the user again");
  onCompleteCallback();
}

myAwesomeFunctionv2(function () {
  console.log("notifyUser function was called!");
});

//  This can also be defined as an arrow function, which in this case is just a short hand way of writing the same anonymous function, without the need for the function keyword.

arrowFucntion = () => {
  console.log(`Using arrows to make functions`);
};

arrowFucntion();
