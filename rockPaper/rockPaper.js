const cpuChoiceDisplay = document.getElementById('cpuChoice');
const yourChoiceDisplay = document.getElementById('userChoice');
const winner = document.getElementById('result');
const options = document.querySelectorAll('button');

let result;
let userChoice;
let cpuChoice;

options.forEach(option => option.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    cpuTurn();
    getResult();
}));

function cpuTurn(){
    const randomNum = Math.floor(Math.random()* options.length)+ 1;
    if (randomNum === 1){
        cpuChoice = 'rock'
    }
    if (randomNum === 2){
        cpuChoice = 'paper'
    }
    if (randomNum === 3){
        cpuChoice = 'scissors'
    }
cpuChoiceDisplay.innerHTML = cpuChoice
}

function getResult(){
    if(cpuChoice === userChoice){
        result = 'Its a draw'
    }
    if(cpuChoice === 'rock' && userChoice ==='scissors'){
        result = 'CPU Wins!';
    }
    if(cpuChoice === 'paper' && userChoice ==='scissors'){
        result = 'You Win!';
    }
    if(cpuChoice === 'rock' && userChoice ==='paper'){
        result = 'You Win!';
    }
    
    if(cpuChoice === 'scissors' && userChoice ==='paper'){
        result = 'CPU Wins!'
    }
    if(cpuChoice === 'paper' && userChoice ==='rock'){
        result = 'CPU Wins!';

    }
    if(cpuChoice === 'scissors' && userChoice ==='rock'){
        result = 'You Win!';
    }
    winner.innerHTML = result

}
