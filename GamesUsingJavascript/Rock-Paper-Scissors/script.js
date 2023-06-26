const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genrateComputerChoice();
    genrateResult();
}))

function genrateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1   //Genrate random number between 1 to 3
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function genrateResult(){
    if(computerChoice == userChoice){
        result = 'Tie'
    }
    if(computerChoice == 'rock' && userChoice == 'paper'){
        result = 'You won!'
    }
    if(computerChoice == 'rock' && userChoice == 'scissor'){
        result = 'You lost!'
    }
    if(computerChoice == 'paper' && userChoice == 'scissor'){
        result = 'You won!'
    }
    if(computerChoice == 'paper' && userChoice == 'rock'){
        result = 'You lost!'
    }
    if(computerChoice == 'scissor' && userChoice == 'paper'){
        result = 'You lost!'
    }
    if(computerChoice == 'scissor' && userChoice == 'rock'){
        result = 'You won!'
    }
    resultDisplay.innerHTML = result
}