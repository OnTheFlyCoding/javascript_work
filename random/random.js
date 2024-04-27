let min = document.getElementById("myMin").value;
let max = document.getElementById("myMax").value;
const generateBtn = document.getElementById("generateBtn");
const randomLabel = document.getElementById("randomLabel");
let randomNum;

console.log(min)
console.log(max)
generateBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) +min;
    randomLabel.textContent = randomNum;
}