let counter = 0;
let timer;

let startButton = document.querySelector('#start_button');
let pauseButton = document.querySelector('#pause_button');
let resumeButton = document.querySelector('#resume_button');
let displayCounter = document.querySelector('#counter');

function startTimer() {
    timer = setInterval(updateCounter, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    startTimer();
}

function updateCounter() {
    counter++;
    displayCounter.innerText = counter;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);