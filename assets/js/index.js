let batmanModal = document.querySelector('.batman-modal') ;

let riddlerModal = document.querySelector('.riddler-modal');

let button = document.getElementsByClassName('close');

let batmanBackground = document.querySelector('.batman-background');

let riddlerBackground = document.querySelector('.riddler-background');


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

function riddlerClose() {
    riddlerModal.style.display = "none";
    riddlerBackground.style.display = "none";
}
