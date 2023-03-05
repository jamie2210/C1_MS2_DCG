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
function keyboard() {
    let keyboard = "";
    for(let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        keyboard += `<button class="button-keys">${letter}</button>`;
    }
    document.getElementById('keys').innerHTML = keyboard;
}

keyboard();

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
            button.classList.remove('button-keys')
            button.classList.add('clicked', 'button-keys');
            button.disabled = true;
            checkLetter(letter);
        }
    });
}

keyboardEventListeners();

document.getElementById('maxguesses').innerHTML = maxGuesses;

