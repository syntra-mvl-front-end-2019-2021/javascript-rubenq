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
    
    // Durstenfeld shuffle
    for (var i = sentenceArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * sentenceArray.length);
        var temp = sentenceArray[i];
        sentenceArray[i] = sentenceArray[j];
        sentenceArray[j] = temp;
    }

    result.innerHTML = sentenceArray.join(' ');
    numberOfWords.innerHTML = sentenceArray.length;
    numberOfLetters.innerHTML = lettersArray.length;
}

submitBtn.addEventListener('click', splitSentence);
