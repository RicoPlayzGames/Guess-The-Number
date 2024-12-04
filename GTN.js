let secretNumber;
let guessCount = 0;
let totalGuesses = 0;
let correctGuesses = 0;
let gamesPlayed = 0;
let fastestAttempt = Infinity;
let gameActive = true;

// Function to start a new game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    gameActive = true;
    document.getElementById("result").innerHTML = "";
    document.getElementById("submit").style.display = "inline";
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("currentAttempt").innerHTML = "Current attempt: [0][0]";
    document.getElementById("totalGuesses").innerHTML = `Total guesses: ${totalGuesses}`;
    document.getElementById("correctGuesses").innerHTML = `Correct guesses: ${correctGuesses}`;
    document.getElementById("gamesPlayed").innerHTML = `Games played: ${gamesPlayed}`;
    document.getElementById("bestAttempt").innerHTML = `Fastest attempt: ${fastestAttempt === Infinity ? 'N/A' : fastestAttempt}`;
    document.getElementById("guess").value = '';
}

// Start the game for the first time
startGame();

// Function to check the user's guess
function checkGuess() {
    if (!gameActive) return;

    let userGuess = parseInt(document.getElementById("guess").value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 100!";
        return;
    }

    guessCount++;
    totalGuesses++;
    document.getElementById("currentAttempt").innerHTML = `Current attempt: [${guessCount}][${userGuess}]`;
    document.getElementById("totalGuesses").innerHTML = `Total guesses: ${totalGuesses}`;

    if (userGuess === secretNumber) {
        document.getElementById("result").innerHTML = `Correct! You guessed it in ${guessCount} attempts.`;
        correctGuesses++;
        gamesPlayed++;
        if (guessCount < fastestAttempt) {
            fastestAttempt = guessCount;
            document.getElementById("bestAttempt").innerHTML = `Fastest attempt: ${fastestAttempt} attempts`;
        }
        gameActive = false;
        document.getElementById("submit").style.display = "none";
        document.getElementById("tryAgain").style.display = "inline";
    } else if (userGuess < secretNumber) {
        document.getElementById("result").innerHTML = "Too low! Try again.";
    } else {
        document.getElementById("result").innerHTML = "Too high! Try again.";
    }
}

// Event listeners
document.getElementById("submit").addEventListener("click", checkGuess);
document.getElementById("tryAgain").addEventListener("click", startGame);

// Theme toggle function
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
