document.addEventListener('DOMContentLoaded', function() {
});

let startButton = document.querySelector('.start-button');
let gameContainer = document.querySelector('.game-container');
let quizContainer = document.querySelector('.quiz-container');
let timeLine = document.querySelector('.time-line');
let answers = document.querySelector('.answers');
let resultContainer = document.querySelector('.result-container');
let restartQuiz = document.querySelector('.restart');
let quitQuiz = document.querySelector('.quit');
let nextButton = document.querySelector('.next-button');

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let interval;
let barSeconds = 1;
let seconds = 30;
let bar = 0;

let tickIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>'
let crossIcon = '<div class="icon"><i class="fa-solid fa-xmark"></i></div>'


function start() {
    quizContainer.classList.add('activequiz');
    gameContainerSize();
}

startButton.addEventListener('click', function() {
    start();
    showQuestionAnswers(0);
    startTimer();
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
    document.getElementById('question-on').innerHTML = questionNumber;
    document.getElementById('question-total').innerHTML = questions.length;

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

    clearInterval(interval);

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

function showResult() {
    quizContainer.classList.remove('activequiz');
    resultContainer.classList.add('activeresult');
    let scoreText = document.querySelector('.quiz-score');
    if(userScore > 7) {
        let scoreTag = '<span> Well done!<br>You got '+ userScore +' out of '+ questions.length +'!<br>You are smarter than you look!</span>';
        scoreText.innerHTML = scoreTag;
    } else if(userScore > 4) {
        let scoreTag = '<span> Hmm, not bad.<br>You got '+ userScore +' out of '+ questions.length +'.<br>You will have to do better to out smart me!</span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span> Oh dear, that is not very good.<br>You got '+ userScore +' out of '+ questions.length +'!<br>Not the brightest spark are you!</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function restart() {
    questionCount = 0;
    showQuestionAnswers(questionCount);
    start();
    resultContainer.classList.remove('activeresult');
    nextButton.classList.remove('show');
    restartTimer();
}

function quit() {
    window.location.reload();
}



function startTimer() {   
    interval = setInterval(function() {
        let timer = document.getElementById('timer-seconds');
        let count = timer.textContent * 1-1;
        timer.textContent = count;

        // bar++;
        // timeLine.style.width = bar + "%"

        if(count === 0){
            clearInterval(interval);
            let allAnswers = answers.querySelectorAll('.answer-text');
            let correctAnswer = questions[questionCount].answer;
            for (i = 0; i < allAnswers.length; i++) {
                if(allAnswers[i].textContent == correctAnswer) {
                    allAnswers[i].classList.add('correct');
                    allAnswers[i].insertAdjacentHTML("beforeend", tickIcon);
                    }
                }
                for (i = 0; i < allAnswers.length; i++) {
                    allAnswers[i].classList.add('disabled');
            }
            nextButton.classList.add('show');
       }
    }, 1000);
}

function restartTimer() {
    clearInterval(interval);
    let timer = document.getElementById('timer-seconds');
    timer.textContent = 30;
    startTimer();
}