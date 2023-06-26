const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score');

let result = 0
let hitPosition
let currentTime = 10
let timerId = null

function randomSquare() {
    squares.forEach( square => {
        square.classList.remove('mole')                   // for every square remove the class mole (used for refresh)
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]   //Select a random square
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}


//whenever we click mole check the id of clicked mole and the random mole is equal 
// if they are equal then increment the result and at end add it to score
squares.forEach( square => {
    square.addEventListener('mousedown',() =>{
        if (square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare,800)            // called a function after each 500 milisecond
}

moveMole();

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown,1000)