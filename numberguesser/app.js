// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('click', function(e){
    if(e.target.className == 'play-again'){
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('mousedown', function(){
    let guess = parseInt(guessInput.value);
    // Validate
    guessesLeft--;
    if(guessesLeft == 0){
        guessInput.disabled = true;
    }
    if(isNaN || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}. You have ${guessesLeft} guesses left`, 'red');
    }
    // Check if won
    if(guess == winningNum){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage('Congratulations! You have selected the winning number!', 'green');
        guessBtn.value = "Play Again";
    }else{
        guessInput.style.borderColor = 'red';
        setMessage(`The number you slected is incorrect. You have ${guessesLeft} guesses left`, 'red');
    }
    if(guessesLeft == 0){
        setMessage('Game Over. You have 0 guesses left. Press enter to start again', 'red');
        guessBtn.value = "Play Again";
        guessBtn.className += 'play-again';
    }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}