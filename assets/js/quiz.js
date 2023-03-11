document.addEventListener('DOMContentLoaded', function() {
});

let startButton = document.querySelector('.start-button');
let gameContainer = document.querySelector('.game-container');
let quizContainer = document.querySelector('.quiz-container');
let secondsLeft = document.querySelector('.timer-seconds')
let timeLine = document.querySelector('.time-line');
let answers = document.querySelector('.answers');
let resultContainer = document.querySelector('.result-container');
let restartQuiz = document.querySelector('.restart');
let quitQuiz = document.querySelector('.quit');
let nextButton = document.querySelector('.next-button');

let questionCount = 0;
let questionnumber = 1;
let userScore = 0;

let tickIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>'
let crossIcon = '<div class="icon"><i class="fa-solid fa-xmark"></i></div>'

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
        answer[i].addEventListener('click', function() {
            answerSelected(this);
        });
    }
}

function gameContainerSize() {
    gameContainer.classList.add('container-grow');
    gameContainer.classList.remove('game-container');
}

function answerSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allAnswers = answers.querySelectorAll('.answer-text');

    if(userAnswer === correctAnswer) {
        userScore +=1;
        answer.classList.add('correct');
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (i = 0; i < allAnswers.length; i++) {
            if(allAnswers[i].textContent == correctAnswer) {
                allAnswers[i].classList.add('correct');
                allAnswers[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    for (i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.add('disabled');
    }
    nextButton.classList.add('show');
}