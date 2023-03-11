document.addEventListener('DOMContentLoaded', function() {
});

let startButton = document.querySelector('.start-button');
let gameContainer = document.querySelector('.game-container');
let quizContainer = document.querySelector('.quiz-container');
let secondsLeft = document.querySelector('.timer-seconds')
let timeLine = document.querySelector('.time-line');
let answers = document.querySelector('.answers');
let resultContainer = querySelector('.result-container');


function start() {
    quizContainer.classList.add('activequiz');
}

start();
