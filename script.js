let targetNumber = Math.floor(Math.random() * 100) + 1;
let currentGuess = 50;
let guessesRemaining = 5;
let gameLog = [];

function updateDisplay() {
  document.getElementById("current-guess").textContent = currentGuess;
  document.getElementById("guesses-remaining").textContent = guessesRemaining;
  document.getElementById("log").textContent = gameLog.join('\n');
}

function checkGuess() {
  const difference = Math.abs(targetNumber - currentGuess);
  let response = "";

  if (difference <= 5) {
    response = "Very Hot";
  } else if (difference <= 8) {
    response = "Hot";
  } else if (difference <= 15) {
    response = "Very Warm";
  } else if (difference <= 20) {
    response = "Warm";
  } else if (difference <= 30) {
    response = "Cool";
  } else if (difference <= 40) {
    response = "Very Cool";
  } else if (difference <= 55) {
    response = "Cold";
  } else {
    response = "Very Cold";
  }


  if (Math.random() < 0.05) {
    response = "MAY OR MAY NOT BE CAP: " + response;
  }

  gameLog.push(`Guess: ${currentGuess}, Response: ${response}`);
  updateDisplay();

  if (currentGuess === targetNumber) {
    gameLog.push("Congratulations! You've won.");
    updateDisplay();
    disableButtons(true);
  } else {

    guessesRemaining--;
    if (guessesRemaining === 0) {

      gameLog.push(`Game over. The number was ${targetNumber}.`);
      updateDisplay();
      disableButtons(true);
    }
  }
}


function disableButtons(disabled) {
  const buttons = document.querySelectorAll("#guess-controls button");
  buttons.forEach((button) => {
    button.disabled = disabled;
  });
};

document.getElementById("s-25").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.max(currentGuess - 25, 1);
    updateDisplay();
  };
});

document.getElementById("s-10").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.max(currentGuess - 10, 1);
    updateDisplay();
  }
});

document.getElementById("s-5").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.max(currentGuess - 5, 1);
    updateDisplay();
  };
});

document.getElementById("s-1").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.max(currentGuess - 1, 1);
    updateDisplay();
  };
});

document.getElementById("a-1").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.min(currentGuess + 1, 100);
    updateDisplay();
  };
});

document.getElementById("a-5").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.min(currentGuess + 5, 100);
    updateDisplay();
  };
});

document.getElementById("a-10").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.min(currentGuess + 10, 100);
    updateDisplay();
  };
});

document.getElementById("a-25").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    currentGuess = Math.min(currentGuess + 25, 100);
    updateDisplay();
  };
});
document.getElementById("Guess").addEventListener("click", () => {
  if (guessesRemaining > 0) {
    checkGuess();
  }
});

document.getElementById("reset").addEventListener("click", () => {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  currentGuess = 50;
  guessesRemaining = 5;
  gameLog = [];
  updateDisplay();
  disableButtons(false);
});
updateDisplay();
disableButtons(false);
