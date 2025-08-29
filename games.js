// Rock Paper Scissors Game
let userMove = "";
let computermove = "";
let userWins = 0;
let computerWins = 0;
let ties = 0;

function RPS() {
  const Compmove = pickcomputermove();
  if (Compmove === "Rock" && userMove === "Rock") {
    alert("Computer chooses Rock. It's a tie!");
    ties++;
  } else if (Compmove === "Rock" && userMove === "Paper") {
    alert("Computer chooses Rock. You win!");
    userWins++;
  } else if (Compmove === "Rock" && userMove === "Scissors") {
    alert("Computer chooses Rock. You lose!");
    computerWins++;
  } else if (Compmove === "Paper" && userMove === "Rock") {
    alert("Computer chooses Paper. You lose!");
    computerWins++;
  } else if (Compmove === "Paper" && userMove === "Paper") {
    alert("Computer chooses Paper. It's a tie!");
    ties++;
  } else if (Compmove === "Paper" && userMove === "Scissors") {
    alert("Computer chooses Paper. You win!");
    userWins++;
  } else if (Compmove === "Scissors" && userMove === "Rock") {
    alert("Computer chooses Scissors. You win!");
    userWins++;
  } else if (Compmove === "Scissors" && userMove === "Paper") {
    alert("Computer chooses Scissors. You lose!");
    computerWins++;
  } else if (Compmove === "Scissors" && userMove === "Scissors") {
    alert("Computer chooses Scissors. It's a tie!");
    ties++;
  }
  document.getElementById("Userwins").textContent = userWins;
  document.getElementById("Computerwins").textContent = computerWins;
  document.getElementById("Ties").textContent = ties;
}
function pickcomputermove() {
  const randNum2 = Math.random();

  if (randNum2 >= 0 && randNum2 < 1 / 3) {
    computermove = "Rock";
  } else if (randNum2 >= 1 / 3 && randNum2 < 2 / 3) {
    computermove = "Paper";
  } else {
    computermove = "Scissors";
  }
  return computermove;
}

// Number Guessing Game





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let randomint = getRandomInt(1, 11);


function checkGuess() {


  let userGuess = document.getElementById("userGuess").value;
   if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById("guessResult").textContent = "Please enter a number between 1 and 10";
        return;
    }
  if (userGuess == randomint) {
    document.getElementById("guessResult").textContent = "Congratulations! You guessed the right number.";
  } else if (userGuess < randomint) {
        document.getElementById("guessResult").textContent = "Too low! Try a higher number.";
    } else {
        document.getElementById("guessResult").textContent = "Too high! Try a lower number.";
    }
  document.getElementById("guessList").innerHTML += "<li>" + userGuess + "</li>";
}

function resetGame() {
  randomint = getRandomInt(1, 11);
  document.getElementById("userGuess").value = "";
  document.getElementById("guessResult").textContent = "";
  document.getElementById("guessList").innerHTML = "";
  alert("The game has been reset.");
}
function giveUp(){
alert(`You gave up! The number was ${randomint}`);
  resetGame();

  alert("The game has been reset.");

}


//Tic-Tac-Toe Game
