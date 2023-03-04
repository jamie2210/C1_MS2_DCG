let batmanWord = [
    'joker', 'catwoman', 'robin', 'the riddler', 'bruce wayne', 'gotham city', 'justice league', 'batmobile', 'talia al ghul', 'alfred pennyworth', 'james gordon', 'dick grayson',
    'nightwing', 'damian wayne', 'wonder woman', 'wayne manor', 'harvey two face', 'arkum asylum', 'the penguin', 'wayne tower', 'the dark knight']

let answer = '';

function picWord () {
    answer = batmanWord[Math.floor(Math.random() * batmanWord.length)];

    alert(answer);
}

picWord();