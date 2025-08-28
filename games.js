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




      //Tic-Tac-Toe Game