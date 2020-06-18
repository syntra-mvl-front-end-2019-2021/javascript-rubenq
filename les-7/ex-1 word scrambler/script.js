// const wordArray = ['bla', 'bla2', 'bla3', 'bla4'];
// const randomIndex = Math.floor(Math.random() * wordArray.length);

// console.log(wordArray[randomIndex]);


let submitBtn = document.getElementById('submit-btn')

function splitSentence (event)
{
    let sentence = document.getElementById('user-input').value;
    let result = document.getElementById('result-container');
    let lettersArray = sentence.split('');
    let sentenceArray = sentence.split(' ');
    let randomWords = Math.floor(Math.random() * sentenceArray.length);
    let numberOfWords = document.getElementById('word-count');
    let numberOfLetters = document.getElementById('letter-count');
    
    result.innerHTML = sentenceArray[randomWords];
    numberOfWords.innerHTML = sentenceArray.length;
    numberOfLetters.innerHTML = lettersArray.length;
    console.log(sentenceArray[randomWords]);
}

submitBtn.addEventListener('click', splitSentence);
