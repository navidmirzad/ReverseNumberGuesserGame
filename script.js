const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startGame)
startButton.innerHTML = "Start new game"


let minimumRange = 1;
let maximumRange = 100;
let currentGuess;
let guessCount = 1;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tooLowButton = document.getElementById("lower");
const correctButton = document.getElementById("correct");
const tooHighButton = document.getElementById("higher");

// event listeners for the 3 outcomes
tooLowButton.addEventListener('click', function() {
    handleAnswer("lower");
});

correctButton.addEventListener('click', function() {
    handleAnswer("correct");
});

tooHighButton.addEventListener('click', function() {
    handleAnswer("higher");
});


function startGame() {
    // resets variables so we can start a new game
    minimumRange = 1; 
    maximumRange = 100;  
    guessCount = 1;

    // Clear previous guesses
    document.getElementById("guess-list").innerHTML = "";

    // Generate the first guess
    currentGuess = generateRandomNumber(minimumRange, maximumRange);
    displayGuess(currentGuess);
}

function handleAnswer(answer) {
    if (answer === "lower") {
        maximumRange = currentGuess - 1;
    } else if (answer === "higher") {
        minimumRange = currentGuess + 1;
    } else {
        displayResult();
        return; // stops the game
    }

    currentGuess = generateRandomNumber(minimumRange, maximumRange);
    guessCount++;
    displayGuess(currentGuess);
}


function displayGuess(guess) {
    const guessElement = document.createElement("li");
    guessElement.innerHTML = `<p>the computers guesses: ${guess}</p>`;
    document.getElementById("guess-list").appendChild(guessElement);
}


function displayResult() {
    alert(`Hooray! The computer guessed your number (${currentGuess}) in ${guessCount} guesses.`);

}