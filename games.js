

// Rock Paper Scissors Game
let userMove = "";
let computermove = "";
let userWins = Number(localStorage.getItem('Userwins')) || 0;
let computerWins = Number(localStorage.getItem('Computerwins')) || 0;
let ties = Number(localStorage.getItem('Ties')) || 0;
console.log('LOADED:', userWins, computerWins, ties);
console.log('From storage:', localStorage.getItem('Userwins'), localStorage.getItem('Computerwins'), localStorage.getItem('Ties'));
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
  localStorage.setItem('Userwins', userWins);
  localStorage.setItem('Ties', ties);
  localStorage.setItem('Computerwins', computerWins);
  console.log(userWins,computerWins,ties);
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
document.getElementById("Userwins").textContent = userWins;
document.getElementById("Computerwins").textContent = computerWins;
document.getElementById("Ties").textContent = ties;


// Number Guessing Game





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let randomint = getRandomInt(1, 101);


function checkGuess() {


  let userGuess = Number(document.getElementById("userGuess").value );
   if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("guessResult").textContent = "Please enter a number between 1 and 100";
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
  document.querySelectorAll('.X').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.X').forEach(btn => btn.classList.remove('clicked'));
      this.classList.add('clicked');
    });
  });

let userchoice = '';
let computerTTTchoice = '';
function choose(){

  if(choice==1){
    console.log("The user chooses X");
     userchoice= 'X';
     computerTTTchoice= 'O';
    
  }
  else{
    console.log("The user chooses O");
     userchoice= 'O';
     computerTTTchoice= 'X';
  }
}

function marker(num){
  let T1=document.getElementById("T1").textContent;
  let T2=document.getElementById("T2").textContent;
  let T3=document.getElementById("T3").textContent; 
  let T4=document.getElementById("T4").textContent;
  let T5=document.getElementById("T5").textContent;
  let T6=document.getElementById("T6").textContent;
  let T7=document.getElementById("T7").textContent;
  let T8=document.getElementById("T8").textContent;
  let T9=document.getElementById("T9").textContent;

if(num==1){
  console.log("1 is marked as " + userchoice);
   document.getElementById("T1").textContent = userchoice;
   computerchoice();
}
else if(num==2){
   console.log("2 is marked as " + userchoice);
    document.getElementById("T2").textContent = userchoice;
    computerchoice();
}
else if(num==3){
   console.log("3 is marked as " + userchoice);
   document.getElementById("T3").textContent = userchoice;
   computerchoice();
}
else if(num==4){
   console.log("4 is marked as " + userchoice);
   document.getElementById("T4").textContent = userchoice;
   computerchoice();
}
else if(num==5){
   console.log("5 is marked as " + userchoice);
   document.getElementById("T5").textContent = userchoice;
   computerchoice();
}
else if(num==6){
   console.log("6 is marked as " + userchoice);
   document.getElementById("T6").textContent = userchoice;
   computerchoice();
}
else if(num==7){
   console.log("7 is marked as " + userchoice);
   document.getElementById("T7").textContent = userchoice;
   computerchoice();
}
else if(num==8){
   console.log("8 is marked as " + userchoice);
   document.getElementById("T8").textContent = userchoice;
   computerchoice();
}

else if(num==9){
   console.log("9 is marked as " + userchoice);
   document.getElementById("T9").textContent = userchoice;
   computerchoice();
}
let userWins = '';
let computerWins = '';

  if(T1 == T2 && T2 == T3 && T1 == userchoice && T1 == 'X' || T4 == T5 && T5 == T6 && T4 == userchoice && T4 == 'X' || T7 == T8 && T8 == T9 && T7 == userchoice && T7== 'X' || T1 == T4 && T4 == T7 && T1 == userchoice && T1 == 'X' || T2 == T5 && T5 == T8 && T2 == userchoice && T2 == 'X' || T3 == T6 && T6 == T9 && T3 == userchoice && T3 == 'X' || T1 == T5 && T5 == T9 && T1 == userchoice && T1== 'X' || T3 == T5 && T5 == T7 && T3 == userchoice && T3 == 'X'){
    alert('X' + " wins!");
    if(userchoice=='X'){
      userWins += 1;
      document.getElementById("UserwinsTTT").textContent = userWins;
    }
    else if(userchoice=='O'){
      computerWins += 1;
      document.getElementById("ComputerwinsTTT").textContent = computerWins;
    }
  }
  else if(T1 == T2 && T2 == T3 && T1 == userchoice && T1 == 'O' || T4 == T5 && T5 == T6 && T4 == userchoice && T4 == 'O' || T7 == T8 && T8 == T9 && T7 == userchoice && T7== 'O' || T1 == T4 && T4 == T7 && T1 == userchoice && T1 == 'O' || T2 == T5 && T5 == T8 && T2 == userchoice && T2 == 'O' || T3 == T6 && T6 == T9 && T3 == userchoice && T3 == 'O' || T1 == T5 && T5 == T9 && T1 == userchoice && T1== 'O' || T3 == T5 && T5 == T7 && T3 == userchoice && T3 == 'O'){
alert('O' + " wins!");
  if(userchoice=='O'){
      userWins += 1;
      document.getElementById("UserwinsTTT").textContent = userWins;
    }
    else if(userchoice=='X'){
      computerWins += 1;
      document.getElementById("ComputerwinsTTT").textContent = computerWins;
    }
  }

}
function resetTicTacToe(){
  document.getElementById("T1").textContent = '';
  document.getElementById("T2").textContent = '';
  document.getElementById("T3").textContent = '';
  document.getElementById("T4").textContent = '';
  document.getElementById("T5").textContent = '';
  document.getElementById("T6").textContent = '';
  document.getElementById("T7").textContent = '';
  document.getElementById("T8").textContent = '';
  document.getElementById("T9").textContent = '';
  userchoice = '';
  computerTTTchoice = '';
  alert("The game has been reset.");
}

function computerchoice(){
  let computerint = getRandomInt(1, 9);
  if(computerint==1){
    console.log("Computer chooses 1");
     document.getElementById("T1").textContent = computerTTTchoice;
  }
 else if(computerint==2){
    console.log("Computer chooses 2");
     document.getElementById("T2").textContent = computerTTTchoice;
  }
   else if(computerint==3){
    console.log("Computer chooses 3");
     document.getElementById("T3").textContent = computerTTTchoice;
  }

   else if(computerint==4){
    console.log("Computer chooses 4");
     document.getElementById("T4").textContent = computerTTTchoice;
  }

   else if(computerint==5){
    console.log("Computer chooses 5");
     document.getElementById("T5").textContent = computerTTTchoice;
  }

   else if(computerint==6){
    console.log("Computer chooses 6");
     document.getElementById("T6").textContent = computerTTTchoice;
  }

   else if(computerint==7){
    console.log("Computer chooses 7");
     document.getElementById("T7").textContent = computerTTTchoice;
  }

   else if(computerint==8){
     console.log("Computer chooses 8");
     document.getElementById("T8").textContent = computerTTTchoice;
  }

   else if(computerint==9){
    console.log("Computer chooses 9");
     document.getElementById("T9").textContent = computerTTTchoice;
  }


}
function computerTTTchoiceII(){

  //Use of array
}



//alerts


