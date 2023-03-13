/**
 * Select reuqired elements
 */

let batmanModal = document.querySelector('.batman-modal') ;
let riddlerModal = document.querySelector('.riddler-modal');
let button = document.getElementsByClassName('close');
let batmanBackground = document.querySelector('.batman-background');
let riddlerBackground = document.querySelector('.riddler-background');

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

function batmanClose() {
    batmanModal.style.display = "none";
    batmanBackground.style.display = "none";
}

/**
 * Functions change display to none, hidding modal
 * Grey / darkened background removed
 */
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
 }