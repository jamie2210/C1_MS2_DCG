/*jshint esversion: 6 */

/**
 * Select reuqired elements
 */
const batmanModal = document.querySelector('.batman-modal') ;
const riddlerModal = document.querySelector('.riddler-modal');
const button = document.getElementsByClassName('close');
const batmanBackground = document.querySelector('.batman-background');
const riddlerBackground = document.querySelector('.riddler-background');
const intro = document.querySelector('.intro-text');

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

window.onclick = function(event) {
    if (event.target == batmanModal) {
        batmanModal.style.display = "none";
        batmanBackground.style.display = "none";
     }
 
     if (event.target == riddlerModal) {
        riddlerModal.style.display = "none";
        riddlerBackground.style.display = "none";
     }
 };

 /**
  * Close intro auto pop up modal
  */
 function introClose() {
    intro.style.display = "none";
 }

/* exported hangmanButton, quizButton, indexButton */
 /*exported button, batmanRules, riddlerRules, batmanClose, riddlerClose, introClose */