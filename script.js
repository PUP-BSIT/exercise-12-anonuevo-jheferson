let counter = 0;
let timer;

let startButton = document.querySelector('#start_button');
let displayCounter = document.querySelector('#counter');

function startTimer() {
    timer = setInterval(updateCounter, 1000);
}

function updateCounter() {
    counter++;
    displayCounter.innerText = counter;
}

startButton.addEventListener('click', startTimer);