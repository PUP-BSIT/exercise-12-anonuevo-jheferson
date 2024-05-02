let startButton = document.querySelector('#start_button');
let pauseButton = document.querySelector('#pause_button');
let resumeButton = document.querySelector('#resume_button');
let stopButton = document.querySelector('#stop_button');
let displayCounter = document.querySelector('#counter');

let counter = 0;
let timer;

function startTimer() {
    timer = setInterval(updateCounter, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    startTimer();
}

function stopTimer() {
    clearInterval(timer);
    counter = 0;
    displayCounter.innerText = counter;
}

function updateCounter() {
    counter++;
    displayCounter.innerText = counter;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
stopButton.addEventListener('click', stopTimer);