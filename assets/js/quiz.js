/*jshint esversion: 6 */

/**
 * Add an event listener to ensure Javascript will not run until HTML is fully loaded.
 */
document.addEventListener('DOMContentLoaded', function() {
});


/**
 * Select reuqired elements.
 */
const startButton = document.querySelector('.start-button');
const gameContainer = document.querySelector('.game-container');
const quizContainer = document.querySelector('.quiz-container');
const timeLine = document.querySelector('.time-line');
const answers = document.querySelector('.answers');
const resultContainer = document.querySelector('.result-container');
const restartQuiz = document.querySelector('.restart');
const quitQuiz = document.querySelector('.quit');
const nextButton = document.querySelector('.next-button');

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let interval;
let bar = 0;

const tickIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>';
const crossIcon = '<div class="icon"><i class="fa-solid fa-xmark"></i></div>';

/**
 * Button functions.
 */
 function hangmanButton(){
    window.location.replace("hangman.html");
}
function quizButton(){
    window.location.replace("quiz.html");
}
function indexButton(){
    window.location.replace("index.html");
}

/**
 * Starts quiz if Start Quiz button is clicked.
 */

function start() {
    quizContainer.classList.add('activequiz');
    gameContainerSize();
    startButton.style.display = "none";
}

startButton.addEventListener('click', function() {
    start();
    showQuestionAnswers(0);
    startTimer();
  });

/**
 * Display question number and text.
 * Create HTML content for the question and answers based on the data in the `questions` array.
 * Update text diplaying current question and total number of questions.
 * Add event listner to each of the answser elements to respond to clicks from user.
 * @param {number} index 
 */
function showQuestionAnswers(index) {
    let questionText = document.querySelector('.question');

    let questionContent = `<span class="question">${questions[index].numb}. ${questions[index].question}</span>`;
    let answersContent = `
    <div class="answer-text"><span tabindex="0">${questions[index].options[0]}</span></div>
    <div class="answer-text"><span tabindex="0">${questions[index].options[1]}</span></div>
    <div class="answer-text"><span tabindex="0">${questions[index].options[2]}</span></div>
    <div class="answer-text"><span tabindex="0">${questions[index].options[3]}</span></div>
    `;
    questionText.innerHTML = questionContent;
    answers.innerHTML = answersContent;

    document.getElementById('question-on').innerHTML = questionNumber;
    document.getElementById('question-total').innerHTML = questions.length;

    let indexAnswer = answers.querySelectorAll('.answer-text span');

    for(let i = 0; i < indexAnswer.length; i++) {
        indexAnswer[i].addEventListener('keydown', function(event) {
            if(event.key === 'Enter') {
                answerSelected(this);
            }
        });
    }

    let answer = answers.querySelectorAll('.answer-text');

    for(let i = 0; i < answer.length; i++) {
        answer[i].addEventListener('click', function() {
            answerSelected(this);
        });
    }
}

/**
 * As the game is absolute this function is needed to manipulate the size of the container that contains the quiz.
 */
function gameContainerSize() {
    gameContainer.classList.add('container-grow');
    gameContainer.classList.remove('game-container');
}

/**
 * Stops the timer once answer selected.
 * If answer is correct score is increased, 'correct' class is called, highlihgting selection in green with a tick icon.
 * If answer is incorrect, 'incorrect' class is called, highlighting selection in black with a cross icon.
 * Loop is then activated to find the correct answer and displays it to the user.
 * Once an answer is selected, all options are disabled, allowing the user only one turn.
 * Next button displayed once user has selected an answer.
 * @param {HTMLElement} answer 
 */
function answerSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allAnswers = answers.querySelectorAll('.answer-text');

    clearInterval(interval);

    if(userAnswer === correctAnswer) {
        userScore +=1;
        answer.classList.add('correct');
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allAnswers.length; i++) {
            if(allAnswers[i].textContent == correctAnswer) {
                allAnswers[i].classList.add('correct');
                allAnswers[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.add('disabled');
    }
    nextButton.classList.add('show');
}

/**
 * Runs the next question unless at the end of questions, then will run show result function.
 */
function next() {
    if(questionCount < questions.length - 1) {
        questionCount++;
        questionNumber++;
        showQuestionAnswers(questionCount);
        nextButton.classList.remove('show');
        restartTimer();
    } else {
        showResult();
    }
}

/**
 * Collects user score and displays 1 of 3 scoreTags with specifc text relating to the score.
 */
function showResult() {
    quizContainer.classList.remove('activequiz');
    resultContainer.classList.add('activeresult');
    let scoreText = document.querySelector('.quiz-score');
    if(userScore > 7) {
        let scoreTag = `<span> Well done!<br>You got ${userScore} out of ${questions.length}!<br>You are smarter than you look!</span>`;
        scoreText.innerHTML = scoreTag;
    } else if(userScore > 4) {
        let scoreTag = `<span> Hmm, not bad.<br>You got ${userScore} out of ${questions.length}.<br>You will have to do better to out smart me!</span>`;
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = `<span> Oh dear, that is not very good.<br>You got ${userScore} out of ${questions.length}!<br>Not the brightest spark are you!</span>`;
        scoreText.innerHTML = scoreTag;
    }
}

/**
 * Start the quiz from the start.
 * Reset score, timer, questionCount and returns question number back to 1.
 * Hide the resultContainer.
 */
function restart() {
    questionCount = 0;
    questionNumber = 1;
    userScore = 0;
    showQuestionAnswers(questionCount);
    start();
    resultContainer.classList.remove('activeresult');
    nextButton.classList.remove('show');
    restartTimer();
}

/**
 * Reloads window which resets whole page and game.
 */
function quit() {
    window.location.reload();
}

/**
 * Runs a timer counting down in seconds from 30.
 * A progress bar similtaneously grows reaching end of the container once 30 seconds is up.
 * Once time is up and user has not selected an answer for loop is initiated to determine correct answer.
 * Next button displayed.
 */
function startTimer() {   
    interval = setInterval(function() {
        let timer = document.getElementById('timer-seconds');
        let count = timer.textContent * 1-1;
        timer.textContent = count;

        //progress bar
        let maxTime = 30;
        let progress = (maxTime - count) / 30 * 100;
        bar = Math.min(progress, 100);
        timeLine.style.width = bar + "%";

        if(count === 0){
            clearInterval(interval);
            let allAnswers = answers.querySelectorAll('.answer-text');
            let correctAnswer = questions[questionCount].answer;
            for (let i = 0; i < allAnswers.length; i++) {
                if(allAnswers[i].textContent == correctAnswer) {
                    allAnswers[i].classList.add('correct');
                    allAnswers[i].insertAdjacentHTML("beforeend", tickIcon);
                    }
                }
                for (let i = 0; i < allAnswers.length; i++) {
                    allAnswers[i].classList.add('disabled');
            }
            nextButton.classList.add('show');
       }
    }, 1000);
}

/**
 * Restarts timer.
 */
function restartTimer() {
    clearInterval(interval);
    let timer = document.getElementById('timer-seconds');
    timer.textContent = 30;
    startTimer();
}

/* exported restartQuiz, quitQuiz, next, restart, quit, hangmanButton, quizButton, indexButton */