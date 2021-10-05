let guessNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message){
document.querySelector('.message').textContent = message;
}

const changeBackground = function(background){
  document.querySelector('body').style.backgroundColor = background;
}

document.querySelector('.check').addEventListener('click', function(){
  const number = Number(document.querySelector('.typenumber').value); 
  if(!number){
    displayMessage("no number 🤔");
  }else if(number !== guessNumber) {
    if(score > 1){
   displayMessage(number > guessNumber ? "the number is too high 🤔" : "the number is too low 🤔");
   score--;
   document.querySelector('.score').textContent = score;
    }
    else{
      displayMessage("you've lost the game👀");
      document.querySelector('.score').textContent = 0;
    }
  }else if(number === guessNumber){
document.querySelector('.guessingNumber').textContent = guessNumber
    displayMessage("That's the number🐱‍🏍");
    changeBackground("green");
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
})
//   }else if(number < guessNumber){
//     if(score > 1){
//     document.querySelector('.message').textContent = ;
//       score--;
//     document.querySelector('.score').textContent = score;
      
//     }
    
//     else{
//       document.querySelector('.message').textContent = "you've lost the game👀";
//       document.querySelector('.score').textContent = 0;
      
      
//     }
//   else if(number === guessNumber){
// document.querySelector('.guessingNumber').textContent = guessNumber
//     displayMessage("That's the number🐱‍🏍");
//     changeBackground("green");
//     if(score > highscore){
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }
// })

document.querySelector('.reset').addEventListener('click', function(){
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Guess the number");
  document.querySelector('.score').textContent = score;
  document.querySelector('.guessingNumber').textContent = "??";
  document.querySelector('.typenumber').value = '';
  changeBackground("grey");
})
