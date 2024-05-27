// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 3;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("result").textContent =
      "Please enter a valid number between 1 and 100.";
    return;
  }

  if (userGuess === targetNumber) {
    document.getElementById("result").textContent =
      "Congratulations! You guessed the correct number.";
  } else if (userGuess < targetNumber) {
    document.getElementById("result").textContent = "Too low! Try again.";
  } else {
    document.getElementById("result").textContent = "Too high! Try again.";
  }

  remainingGuesses--;
  if (remainingGuesses === 0) {
    document.getElementById(
      "result"
    ).textContent = `Game over! The correct number was ${targetNumber}.`;
    document.getElementById("userGuess").disabled = true;
  }
}
