let startButton = document.querySelector('#start_button');
let pauseButton = document.querySelector('#pause_button');
let resumeButton = document.querySelector('#resume_button');
let stopButton = document.querySelector('#stop_button');
let displayCount = document.querySelector('#count');

let count = 0;
let timer;

function startTimer() {
    timer = setInterval(updateCount, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    startTimer();
}

function stopTimer() {
    clearInterval(timer);
    count = 0;
    displayCount.innerText = count;
}

function updateCount() {
    count++;
    displayCount.innerText = count;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
stopButton.addEventListener('click', stopTimer);