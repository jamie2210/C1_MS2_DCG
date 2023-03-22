/*jshint esversion: 6 */

/**
 * Add an event listener to ensure Javascript will not run until HTML is fully loaded.
 */

document.addEventListener('DOMContentLoaded', function() {
});

/**
* Create an array of phrases for the game.
* Create an arrray of win quotes from Batman.
* Create an array of lose quotes from The Joker.
*/

const batmanPhrase = [
    'Joker', 'Catwoman', 'Robin', 'The Riddler', 'Bruce Wayne', 'Gotham City', 'Justice League', 'Batmobile', 'Talia Al Ghul', 'Alfred Pennyworth', 'James Gordon', 'Dick Grayson', 'Harley Quinn',
    'Nightwing', 'Damian Wayne', 'Wonder Woman', 'Wayne Manor', 'Harvey Two Face', 'Arkum Asylum', 'The Penguin', 'Wayne Tower', 'The Dark Knight', 'Poison Ivy', 'Dr Freeze', 'Scarecrow'];

const winPhrase = [
    "Gotham City needs good brains like yours.",
    "Good job, nothing better than that winning feeling.",
    "Excellent work, that's how winners win!",
    "Look at you! A win in the bank, oh yes!",
    "Great Scott! You've won, love that!"
];

const losePhrase = [
    "Better try again, loserrr",
    "hehe ha he, you dumb dumb, you lost!",
    "Oh dear, I'd give up if I were you!",
    "FAIL. FAIL. FAIIIILLLL!!",
    "Oh no, what would lil' old Battsy say, hmm."
];

let answer = '';
const maxGuesses = 6;
let wrongGuess = 0;
let wins = 0;
let losses = 0;
let jokerWins = 0;
let jokerLosses = 0;
let batmanWins = 0;
let batmanLosses = 0; 
let wordStatus = '';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Select reuqired elements
 */
const winModal = document.querySelector('.win-modal') ;
const loseModal = document.querySelector('.lose-modal');
const winBackground = document.querySelector('.win-background');
const loseBackground = document.querySelector('.lose-background');

document.getElementById('maxguesses').innerHTML = maxGuesses;

/**
 * Button functions
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

/* exported hangmanButton, quizButton, indexButton */

/**
 * Select random word for game.
 */
function selectPhrase() {
    answer = batmanPhrase[Math.floor(Math.random() * batmanPhrase.length)];
}

selectPhrase();

/**
 * Populate keyboard buttons in the game screen.
 */
function createKeyboard() {
    let keyboard = "";
    for(let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        keyboard += `<button class="button-keys" id="btn-${letter}">${letter}</button>`;
    }
    document.getElementById('keys').innerHTML = keyboard;
    keyboardEventListeners();
}

createKeyboard();

/**
 * Set up dashes for letters in the word and blank space between words.
 * @param {string} answer
 * @returns {string} dashes
 */
function hiddenPhrase(answer) {
    let dashes ='';
    for(let i = 0; i < answer.length; i++) {
        let letter = answer[i];
        if (letter !== ' ') {
            dashes += '_';
        } else {
            dashes += ' ';
        }
    }
    return dashes;
}

/**
 * Display dashes for hidden word.
 * @param {string} answer 
 */
function setHiddenPhrase(answer) {
    let guessingPhrase = hiddenPhrase(answer);
    document.getElementById('guessphrase').innerHTML = guessingPhrase;
}

setHiddenPhrase(answer);

/**
 * Add event listeners to keyboard buttons to enable letter guessing with use of mouse and keyboard and add styling to match other game buttons.
 * Call checkLetter function to verify if the hidden phrase contains guessed letter.
 */
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

/**
 * Verify if the hidden phrase contains guessed letter.
 * The addLetter funtion is called if the letter is found wihin the phrase. The number of wrong guesses is not changed.
 * If the letter is not found, the number of wrong guesses is increased by 1 and wrongGuessImage functino is called.
 * If all guesses are used youLost function is called.
 * If phrase is guessed correctly youWon function is called.
 * @param {string} letter 
 */
function checkLetter(letter) {
    if (answer.includes(letter.toLowerCase()) || answer.includes(letter)) {
        addLetter(letter);
    } else {
        document.getElementById('wrongguess').innerHTML = wrongGuess += 1;
    }
    youLost();
    wrongGuessImage();
    youWon();
}

/**
 * Replace the underscores with the guessed letter.
 * logs '_' for letter and ' ' for a space, iterates through array to return guessed letter if it matches. 
 * @param {string} guessedLetter
 */
function addLetter(guessedLetter) {
    let phraseToGuess = document.getElementById('guessphrase').innerHTML;
    wordStatus = phraseToGuess.split('').map((val, index) => guessedLetter.toLowerCase() === answer[index].toLowerCase() ? answer[index] : val ).join('');
    document.getElementById('guessphrase').innerHTML = wordStatus;
}

/**
 * Update hangman image each time a letter is guessed incorrectly.
 */
function wrongGuessImage() {
    if (wrongGuess === 0) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker1.png';
      } else if (wrongGuess === 1) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker2.png';
      } else if (wrongGuess === 2) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker3.png';   
      } else if (wrongGuess === 3) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker4.png';
      } else if (wrongGuess === 4) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker5.png';
      } else if (wrongGuess === 5) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker6.png';
      } else if (wrongGuess === 6) {
        document.getElementById('gallows').src = 'assets/images/hangman/joker7.png';
      }
}
/**
 * Activates 'lose' modal.
 * Removes the hidden phrase.
 * Increases the Losses score by 1.
 */
function youLost() {
    if (wrongGuess === 6) {
        // document.getElementById('keys').innerHTML = `<h2>You Lost!</h2>`;
        loseModal.style.display = "block";
        loseBackground.style.display = "block";
        document.getElementById('guessphrase').innerHTML = '';
        document.getElementById('lose-phrase').innerHTML = losePhrase[Math.floor(Math.random() * losePhrase.length)];
        document.querySelector('.losses').innerHTML = losses += 1;
        document.querySelector('.joker-losses').innerHTML = jokerLosses += 1;
        document.querySelector('.batman-losses').innerHTML = batmanLosses += 1;
    }
}

/**
 * Activates 'win' modal.
 * Removes the guessed phrase.
 * Increase the Wins score by 1.
 */
function youWon() {
    if (wordStatus === answer) {
    // document.getElementById('keys').innerHTML = `<h2>You Won!</h2>`;
    winModal.style.display = "block";
    winBackground.style.display = "block";
    document.getElementById('guessphrase').innerHTML = '';
    document.getElementById('win-phrase').innerHTML = winPhrase[Math.floor(Math.random() * winPhrase.length)];
    document.querySelector('.wins').innerHTML = wins += 1;
    document.querySelector('.joker-wins').innerHTML = jokerWins += 1;
    document.querySelector('.batman-wins').innerHTML = batmanWins += 1;
    }
}

/**
 * Resets everything on the page apart from the Wins and Losses scores.
 * Closes modal.
 */
function reset() {
    document.getElementById('wrongguess').innerHTML = wrongGuess = 0;
    wrongGuessImage();
    createKeyboard();
    selectPhrase();
    setHiddenPhrase(answer);
    keyboardEventListeners();
    winModal.style.display = "none";
    winBackground.style.display = "none";
    loseModal.style.display = "none";
    loseBackground.style.display = "none";
}

/** 
* Allows use of enter key in replace of clicking reset button with mouse.
* Keydown styling matches that of a mouse click turning the button yellow while held down.
* Using keydown and keyup funtions prevents multiple resets whiles key is held down, one reset per press, like the mouse.
*/
function enterKeyReset() {
    let keyDownButton = document.getElementById('reset');
    document.addEventListener('keydown', function(event) {
            if(event.key === 'Enter') {
                // event.preventDefault();
                keyDownButton.classList.add('active');
            }
        });

    let resetButton = document.getElementById('reset');
    document.addEventListener('keyup', function(event) {   
    if (event.key === 'Enter') {
        // event.preventDefault();
        // resetButton.click();
        resetButton.classList.remove('active');
    }
});
    // resetButton.addEventListener('click', function() {

    // });
}

/**
 * Select reuqired elements
 * Add event listners for buttons and links to ensure enter key works when links and buttons other than 'Reset' button are targeted.
 */
const homeBtn = document.getElementById('bat_home');
const quizBtn = document.getElementById('bat_quiz');
const contactBtn = document.getElementById('bat_contact');
const gitBtn = document.getElementById('bat_git');
const resetBtn = document.getElementById('reset');
const letterKeys = document.querySelector('.button-keys');

gitBtn.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        window.open("https://github.com/jamie2210/CI_MS2_DCG","_blank"); // opens link in new tab.
        // window.location.replace("hangman.html"); // refreshes page to reset the class that is added on keydown in enterKeyReset function.
    }
});


/* exported reset */