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

let questions = [
    {
        numb: 1,
        question: "Who is The Joker's girlfriend?",
        answer: "Harley Quinn",
        options: [
            "Talia Al Ghul",
            "Harley Quinn",
            "Poison Ivy",
            "Hardley Davidson",
        ]
    },
    {
        numb: 2,
        question: "Which detective is Batman's allie?",
        answer: "James Gordon",
        options: [
            "Harvey Bullock",
            "Sarah Essen",
            "Renne Montoya",
            "James Gordon",
        ]
    },
    {
        numb: 3,
        question: "What is The Riddler's real name?",
        answer: "Edward Nigma",
        options: [
            "Edward Nigma",
            "Edward Neema",
            "Eddie Nickle",
            "Edward Nemo",
        ]
    },
    {
        numb: 4,
        question: "There have been many Robins but which one is Batman's son?",
        answer: "Damian",
        options: [
            "Jason",
            "Dick",
            "Damian",
            "Tim",
        ]
    },
    {
        numb: 5,
        question: "What is the name of Gothams prison for the crinimally insane?",
        answer: "Arkham Asylum",
        options: [
            "Gotham City Prison",
            "Arkham Asylum",
            "Blackgate Penitentiary",
            "Gotham Supermax",
        ]
    },
    {
        numb: 6,
        question: "How did Pamela Isley gain her powers to become Poison Ivy?",
        answer: "Injected with plant-based poison",
        options: [
            "Bit by a venus flytrap",
            "Tricked into a human genome experiment",
            "Injected with plant-based poison",
            "Merged with plant DNA in a lab accident",
        ]
    },
    {
        numb: 7,
        question: "What are the names of Batman's parents?",
        answer: "Thomas and Martha Wayne",
        options: [
            "Thomas and Maggie Wayne",
            "Thomas and Martha Wayne",
            "Timothy and Martha Wayne",
            "Toby and Mildred Wayne",
        ]
    },
    {
        numb: 8,
        question: "Oswald Chesterfield Cobblepot is the real name of which Batman villian?",
        answer: "The Penguin",
        options: [
            "Mr. Freeze",
            "Deathstroke",
            "Mad Hatter",
            "The Penguin",
        ]
    },
    {
        numb: 9,
        question: "What are the Batman villains Harley Quinn, Catwoman, and Poison Ivy collectively known as?",
        answer: "Gotham City Sirens",
        options: [
            "DC Sisterhood",
            "The Trinity",
            "Gotham City Sirens",
            "Birds of Prey",
        ]
    },
    {
        numb: 10,
        question: "What former District Attorney became the villain known as Two-Face?",
        answer: "Harvey Dent",
        options: [
            "Floyd Lawton",
            "Harvey Dent",
            "Jason Blood",
            "Todd Evans",
        ]
    },
]