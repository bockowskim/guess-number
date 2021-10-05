let guessNumber = Math.trunc(Math.random() * 20) + 1;


// console.log(number);

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
  const number = Number(document.querySelector('.typenumber').value);
  
  
  if(!number){
    document.querySelector('.message').textContent = "no number 🤔"
  }else if(number > guessNumber){
    if(score > 1){
   document.querySelector('.message').textContent = "the number is too high 🤔";
      score--;
   document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = "you've lost the game👀";
      document.querySelector('.score').textContent = 0;
    }
  }else if(number < guessNumber){
    if(score > 1){
    document.querySelector('.message').textContent = "the number is too low 🤔";
      score--;
    document.querySelector('.score').textContent = score;
      
    }
    
    else{
      document.querySelector('.message').textContent = "you've lost the game👀";
      document.querySelector('.score').textContent = 0;
      
      
    }
  }else if(number === guessNumber){
document.querySelector('.guessingNumber').textContent = guessNumber
    document.querySelector('.message').textContent = "That's the number🐱‍🏍";
    document.querySelector('body').style.backgroundColor = "green";
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
})

document.querySelector('.reset').addEventListener('click', function(){
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = "Guess the number";
  document.querySelector('.score').textContent = score;
  document.querySelector('.guessingNumber').textContent = "??";
  document.querySelector('.typenumber').value = '';
  document.querySelector('body').style.backgroundColor = "grey";
})
