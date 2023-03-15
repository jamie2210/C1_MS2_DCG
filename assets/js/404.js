/*jshint esversion: 6 */

/**
 * Count down timer set to 5 seconds before page is re-directed to index.html
 */
function countDownTimer() {
    setInterval(function() {
    let timer = document.getElementById('countdown');
    let count = timer.textContent * 1-1;
    timer.textContent = count;
    if (count <= 1) {
        window.location.replace("index.html");
        }
    }, 1000);
}

countDownTimer();

function indexButton(){
    window.location.replace("index.html");
}

/* exported indexButton */