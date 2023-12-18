const randomNumber = parseInt((Math.random()*10+1))      // [📍 "parseInt" to get this value in the form of an "Integer" ]

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guestField');
const guessSlot= document.querySelector ('.gusses');
const remaining = document.querySelector ('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    //
}

function checkGuess(guess){
    //
}

function displayGuess(guess){
    //
}

function displayMessage(guess){
    //
}

function newGame () {
    //
}


function endGame () {

}


