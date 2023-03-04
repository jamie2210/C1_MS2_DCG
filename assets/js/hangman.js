let batmanWord = [
    'joker', 'catwoman', 'robin', 'the riddler', 'bruce wayne', 'gotham city', 'justice league', 'batmobile', 'talia al ghul', 'alfred pennyworth', 'james gordon', 'dick grayson',
    'nightwing', 'damian wayne', 'wonder woman', 'wayne manor', 'harvey two face', 'arkum asylum', 'the penguin', 'wayne tower', 'the dark knight', 'poison ivy', 'dr freeze', 'scarecrow']

let answer = '';
let maxGuesses = 7;
let mistakes = 0;
let guessed = [];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let word = null;

function selectWord () {
    answer = batmanWord[Math.floor(Math.random() * batmanWord.length)];
}

selectWord();

function keyboard() {
    let keyboard = "";
    for(let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        keyboard += `<button class="button-keys">${letter}</button>`;
    }
    document.getElementById('keys').innerHTML = keyboard;
}

keyboard();

// function keyboard() {
//     buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
//         `<button class="button-keys" id='` + letter + `' onclick="checkGuess('` + letter + `')">` + letter + `</button> `
//         ).join('');
//     document.getElementById('keys').innerHTML = buttons;
// }

// keyboard();


// function checkGuess(chosenLetter) {
//     guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
//     document.getElementById(chosenLetter).setAttribute('disabled', true);

//     if (answer.indexOf(chosenLetter) >= 0) {
//         hiddenWord();
//     }
// }

// function hiddenWord() {
//     word = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

//     document.getElementById('guessword').innerHTML = word;
// }

// hiddenWord();

document.getElementById('maxguesses').innerHTML = maxGuesses;

