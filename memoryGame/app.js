const cardArray = [
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    }
]



cardArray.sort(()=> 0.5 - Math.random());

//Variables
let cardsChosen = [];
let cardChosenId = [];
const cardWon = [];
const gridDisplay = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#myScore');
const winnerDisplay = document.querySelector('#winner');
let score = 0;


// Create Display on webpage
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('card-id',i);
        card.addEventListener('click',flipCard);

        gridDisplay.appendChild(card);
        
    }
}
createBoard();

// Main Portion of Code

function checkMatch(){    
    const cards = document.querySelectorAll('img');
    const option1 = cardChosenId[0];
    const option2 = cardChosenId[1];
    


    if(option1 == option2){
        alert('already clicked on that!');
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('match found!');
        cards[option1].setAttribute('src', '/images/white.png');
        cards[option2].setAttribute('src', '/images/white.png');
        cards[option1].removeEventListener('click',flipCard);
        cards[option2].removeEventListener('click',flipCard);
        cardWon.push(cardsChosen);
        score = score +1;



    } else{
        cards[option1].setAttribute('src', '/images/blank.png');
        cards[option2].setAttribute('src', '/images/blank.png');
    }
    cardsChosen=[];
    cardChosenId=[];
    scoreDisplay.textContent = score;

    if(cardWon.length == cardArray.length/2){
        winnerDisplay.innerHTML = 'Congrats! Youve Won!';
    }
}

function flipCard(){
    const cardId = this.getAttribute('card-id');
    cardsChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length ===2){
        setTimeout(checkMatch,1000);

    }
}
