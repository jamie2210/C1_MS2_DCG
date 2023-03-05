let batmanWord = [
    'Joker', 'Catwoman', 'Robin', 'The Riddler', 'Bruce Wayne', 'Gotham City', 'Justice League', 'Batmobile', 'Talia Al Ghul', 'Alfred Pennyworth', 'James Gordon', 'Dick Grayson', 'Harley Quinn',
    'Nightwing', 'Damian Wayne', 'Wonder Woman', 'Wayne Manor', 'Harvey Two Face', 'Arkum Asylum', 'The Penguin', 'Wayne Tower', 'The Dark Knight', 'Poison Ivy', 'Dr Freeze', 'Scarecrow']

let answer = '';
let maxGuesses = 7;
let mistakes = 0;
let wins = 0;
let losses = 0;
let guessed = [];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let word = '';

/**
 * Select randon word for game
 */

function selectWord () {
    answer = batmanWord[Math.floor(Math.random() * batmanWord.length)];
}

selectWord();

/**
 * Populate keyboard buttons in the game screen
 */
function createKeyboard() {
    let keyboard = "";
    for(let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        keyboard += `<button class="button-keys" id="btn-${letter}">${letter}</button>`;
    }
    document.getElementById('keys').innerHTML = keyboard;
}

createKeyboard();

/**
 * Set up underscores for letters in the word and blank space between words
 * @param {string} answer
 * @returns {string} word
 */
function hiddenWord(answer) {
    let word ='';
    for(let i = 0; i < answer.length; i++) {
        let letter = answer[i];
        if (letter !== ' ') {
            word += '_';
        } else {
            word += ' ';
        }
    }
    return word;
}

/**
 * Display underscores for hidden word
 * @param {string} phrase 
 */
function setHiddenWord(answer) {
    let guessingWord = hiddenWord(answer);
    document.getElementById('guessword').innerHTML = guessingWord;
    alert(answer);
}

setHiddenWord(answer);

function keyboardEventListeners() {
    document.getElementById('keys').addEventListener('click', function (event) {
        if (!event.target.className.includes('button-keys')) return;
        let button = event.target;
        let letter = button.innerHTML;
        if(!button.className.includes('clicked')) {
            button.classList.add('clicked');
            button.disabled = true;
            checkLetter(letter);
        }
    });

    document.addEventListener('keydown', function logKey(event) {
        let letterPressed = event.key.toUpperCase();
        let button = document.getElementById(`btn-${letterPressed}`);
        if (alphabet.includes(letterPressed) && !button.className.includes('pressed')) {
            button.classList.add('active');
            button.disabled = false;
            checkLetter(letterPressed);
        }
    });

    document.addEventListener('keyup', function logKey(event) {
        let letterReleased = event.key.toUpperCase();
        let button = document.getElementById(`btn-${letterReleased}`);
        if (alphabet.includes(letterReleased) && !button.className.includes('pressed')) {
            button.classList.add('pressed');
            button.classList.remove('active');
            button.disabled = true;
            checkLetter(letterReleased);
        }
    });
}

keyboardEventListeners();

document.getElementById('maxguesses').innerHTML = maxGuesses;

