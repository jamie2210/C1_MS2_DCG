document.addEventListener('DOMContentLoaded', function() {
});

let startButton = document.querySelector('.start-button');
let gameContainer = document.querySelector('.game-container');
let quizContainer = document.querySelector('.quiz-container');
let secondsLeft = document.querySelector('.timer-seconds')
let timeLine = document.querySelector('.time-line');
let answers = document.querySelector('.answers');
let resultContainer = document.querySelector('.result-container');
let restartQuiz = document.querySelector('.restart')
let quitQuiz = document.querySelector('.quit')


function start() {
    quizContainer.classList.add('activequiz');
    gameContainerSize();
}

startButton.addEventListener('click', function() {
    start();
    showQuestionAnswers(0);
  });

function showQuestionAnswers(index) {
    let questionText = document.querySelector('.question');

    let questionContent = '<span class="question">'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let answersContent = '<div class="answer-text"><span>' + questions[index].options[0] +'</span></div>'
    + '<div class="answer-text"><span>' + questions[index].options[1] +'</span></div>'
    + '<div class="answer-text"><span>' + questions[index].options[2] +'</span></div>'
    + '<div class="answer-text"><span>' + questions[index].options[3] +'</span></div>';
    questionText.innerHTML = questionContent;
    answers.innerHTML = answersContent;
    
    let answer = answers.querySelectorAll('.answer-text');

    for(let i=0; i < answer.length; i++) {
        answer[i].setAttribute("onclick", "answerSelected(this)");
    }
}

function gameContainerSize() {
    gameContainer.classList.add('container-grow');
    gameContainer.classList.remove('game-container');
}