const cardArray = [
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'fries',
        img : 'images/fries.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'fries',
        img : 'images/fries.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())                                         // shortcut to shuffeling an array randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChoosen = []
let cardChoosendId = []
const cardsWon = []

//function to create a board
function createBoard(){
    for(let i = 0; i < cardArray.length ; i++){
        const card = document.createElement('img');                           // creates a element of image tag
        card.setAttribute('src','images/blank.png');                         // set attribute of image
        card.setAttribute('data-id',i);                                     // set data-id attribute to i
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);  // append the cards to the grid
    }
}

createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id');                         //this element refer to the element we clicked
    cardChoosen.push(cardArray[cardId].name)                            //push the name in the card  
    cardChoosendId.push(cardId)                                          //push the id's
    this.setAttribute('src',cardArray[cardId].img)                     //set the src attribute to img
    if(cardChoosen.length === 2){                                      // if length of card chossen is 2 
        setTimeout( checkMatch , 500);                                 // set timeout of 500 second and for that time invoke the checkMatch function
    }
}

function checkMatch(){
    const optionOneId = cardChoosendId[0];
    const optionTwoId = cardChoosendId[1];
    const cards = document.querySelectorAll('img')                 //selecting all image tag
    console.log('check for match')

    //logic for same card selection
    if(optionOneId == optionTwoId){
        cards[cardChoosendId[0]].setAttribute('src','images/blank.png');
        cards[cardChoosendId[1]].setAttribute('src','images/blank.png');
        alert("You have clicked the same images!")
    }

    //logic for selecting a match
    if(cardChoosen[0] === cardChoosen[1]){
        alert("You found a match")
        cards[cardChoosendId[0]].setAttribute('src','images/white.png');     // add the white image when match found
        cards[cardChoosendId[1]].setAttribute('src','images/white.png');
        cards[cardChoosendId[0]].removeEventListener('click',flipCard);     // remove the event listener when click
        cards[cardChoosendId[1]].removeEventListener('click',flipCard);
        cardsWon.push(cardChoosen)                                        // storing the result how many time we won
    }else{
        cards[cardChoosendId[0]].setAttribute('src','images/blank.png');
        cards[cardChoosendId[1]].setAttribute('src','images/blank.png');
        alert("Sorry ! try again")
    }
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulation you found them all"
    }
    cardChoosen = []
    cardChoosendId = []
}