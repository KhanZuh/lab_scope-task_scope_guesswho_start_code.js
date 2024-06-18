// // GUESS 1 ///////////////////
// let guess = {
//   hair_colour: "red",
//   eye_colour: "blue",
//   hat: false,
//   glasses: true,
//   firstName: "Joseph",
// };

// const guessWho = function () {
//   return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// // Prediction:
// The output will be "Guess who is Joseph". 
// The guess object is defined at the top level, outside of any function or block, which makes it a global variable and can be accessed within the `guessWho` function. 




// // GUESS 2 ///////////////////

// let firstName = "Donna";

// const guessWho = function () {
//   const glasses = false;
//   let firstName = "Liz";
//   return `Guess Who is ${firstName}.`;
// };

// const guess1 = guessWho();
// console.log("guess1: ", guess1);

// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);


// Prediction:

// "guess1: 
// Guess Who is Liz." will be logged because the `guessWho` function has its own local `firstName` variable shadowing the outer one, and it returns the local `firstName` which is "Liz".

// "guess2: 
// Guess Who is Donna" will be logged because `guess2` directly accesses the `firstName` variable from the outer scope (global scope), which is "Donna".



// // GUESS 3 ///////////////////

// const guess = {
//   hair_colour: "black",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Andy",
// };

// const changeHat = function () {
//   guess.hat = !guess.hat;
// }; // 1

// const changeGuess = function (newName) {
//   guess.firstName = newName;
// };

// const guessWho = function () {
//   return `Guess Who is ${guess.firstName}`;
// };

// changeHat();

// if (guess.hat) {
//   changeGuess("Chris");
// } // 2


// const finalAnswer = guessWho();
// console.log(finalAnswer); //3

// Prediction: 
// "Guess Who is Chris". 
// 1 -  The `changeHat` function is called, --> `hat` property of the `guess` object toggled to `true`. 
// 2 -Then, the `if` condition is met, and the `changeGuess` function is called with the argument "Chris", updating the `firstName` property of the `guess` object. 
// 3 -  `guessWho` function is called, which returns the string with the updated `firstName`. (see notes for detailed explanation of flow)


// // GUESS 4 ///////////////////

// let firstName = "Gail";

// if (firstName === "Gail") {
//   let firstName = "Ashley";
// }

// const guessWho = function () {
//   return `Guess Who is ${firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);

// Prediction: 
// The output will be "Guess Who is Gail". 
// if statement is block scoped
// The `guessWho` function still accesses the outer `firstName` variable (global scope), which remains "Gail".


// // GUESS 5 ///////////////////

const guess = {
  hair_colour: "blonde",
  eye_colour: "brown",
  hat: false,
  glasses: false,
  firstName: "Jennifer",
};

const changeGuess = function () {
  guess = {
    hair_colour: "blonde",
    eye_colour: "blue",
    hat: false,
    glasses: false,
    firstName: "Kyle",
  };
};

changeGuess();
console.log(`Guess Who is ${guess.firstName}`);

// Prediction: 
// throw an error. 
// The `guess` object is declared with `const`, which means its reference cannot be reassigned. 
// The `changeGuess` function attempts to assign a new object to `guess`, which is not allowed. 
// Therefore, an error will occur when `changeGuess` is called.

