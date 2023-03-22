/*jshint esversion: 6 */

/**
 * Add an event listener to ensure Javascript will not run until HTML is fully loaded.
 */
 document.addEventListener('DOMContentLoaded', function() {
});

/**
 * Select reuqired elements
 */
const batmanModal = document.querySelector('.batman-modal') ;
const riddlerModal = document.querySelector('.riddler-modal');
const button = document.getElementsByClassName('close');
const batmanBackground = document.querySelector('.batman-background');
const riddlerBackground = document.querySelector('.riddler-background');
const intro = document.querySelector('.intro-text');
const batmanIcon = document.getElementById('batmanicon');
const riddlerIcon = document.getElementById('riddlericon');

/**
 * Button functions
 */
function hangmanButton(){
    window.location.replace("hangman.html");
}
function quizButton(){
    window.location.replace("quiz.html");
}

/**
 * Funtions change display to block, displaying modal
 * Grey / darken background added
 */
function batmanRules() {
    batmanModal.style.display = "block";
    batmanBackground.style.display = "block";
}

function riddlerRules() {
    riddlerModal.style.display = "block";
    riddlerBackground.style.display = "block";
}

/**
 * Functions change display to none, hidding modal
 * Grey / darkened background removed
 */

function batmanClose() {
    batmanModal.style.display = "none";
    batmanBackground.style.display = "none";
}

function riddlerClose() {
    riddlerModal.style.display = "none";
    riddlerBackground.style.display = "none";
}

 /**
  * Close intro auto pop up modal
  */
 function introClose() {
    intro.style.display = "none";
 }

/**
* Event listeners used to open rules when enter key is used via tabindex selection
*/

batmanIcon.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        batmanRules();
    }
});

riddlerIcon.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        riddlerRules();
    }
});


/* exported hangmanButton, quizButton */
 /*exported button, batmanRules, riddlerRules, batmanClose, riddlerClose, introClose */