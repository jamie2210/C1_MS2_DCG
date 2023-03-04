let batmanWord = [
    'joker', 'catwoman', 'robin', 'the riddler', 'bruce wayne', 'gotham city', 'justice league', 'batmobile', 'talia al ghul', 'alfred pennyworth', 'james gordon', 'dick grayson',
    'nightwing', 'damian wayne', 'wonder woman', 'wayne manor', 'harvey two face', 'arkum asylum', 'the penguin', 'wayne tower', 'the dark knight', 'poison ivy', 'dr freeze', 'scarecrow']

let answer = '';

function selectWord () {
    answer = batmanWord[Math.floor(Math.random() * batmanWord.length)];
}

selectWord();

function keyboard() {
    buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
        <button
          class="button-keys"
          id='` + letter + `
          onclick="checkGuess('` + letter + `')"
          >
          ` + letter + `
        </button>  
        `
        ).join('');
    document.getElementById('keys').innerHTML = buttons;
}

keyboard();