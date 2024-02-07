"use strict";

const value = 42;

const values = [];

for (let i = 1; i <= 100; i++) {
  values.push(i);
}

console.log(values);

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startGame);
startButton.innerHTML = "Start new game";

// buttons
const tooLowButton = document.getElementById("lower");
const correctButton = document.getElementById("correct");
const tooHighButton = document.getElementById("higher");

// event listeners for the 3 outcomes
tooLowButton.addEventListener("click", tooLow);
tooHighButton.addEventListener("click", tooHigh);
correctButton.addEventListener("click", correct);

// our 3 variables
let lowestPossibleNumber;
let highestPossibleNumber;
let guess;

// our <ul>
const list = document.querySelector("#guess-list");

// start n restarts game
function startGame() {
  lowestPossibleNumber = 1;
  highestPossibleNumber = 100;

  // clear previous guesses
  document.getElementById("guess-list").innerHTML = "";

  // generate first guess
  generateGuess();
}

// cuts the guess in half everytime
function generateNumber() {
  return Math.floor((lowestPossibleNumber + highestPossibleNumber) / 2);
}

function generateGuess() {
  guess = generateNumber();
  const html = `<li>My guess is ${guess} - is that correct?</li>`;
  list.insertAdjacentHTML("beforeend", html);
}

function tooLow() {
  highestPossibleNumber = guess - 1;
  generateGuess();
}

function tooHigh() {
  lowestPossibleNumber = guess + 1;
  generateGuess();
}

function correct() {
  const html = `<li>${guess} was correct! Press "Start" to try again</li>`;
  list.insertAdjacentHTML("beforeend", html);
}
