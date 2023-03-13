let batmanModal = document.querySelector('.batman-modal') ;

let riddlerModal = document.querySelector('.riddler-modal');

let button = document.getElementsByClassName('close');

function batmanRules() {
    batmanModal.style.display = "block";

}

function riddlerRules() {
    riddlerModal.style.display = "block";
}

function batmanClose() {
    batmanModal.style.display = "none";
}

function riddlerClose() {
    riddlerModal.style.display = "none";
}
