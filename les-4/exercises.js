// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Oefening 1 OK
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2
function wordCount(sentence, word) 
{
    let result = 0;
    let lowerCaseSentence = sentence.toLowerCase();
    let lowerCaseWord = word.toLowerCase();
    let aString = lowerCaseSentence.split(' ');

    for (let i = 0; i < aString.length; i++)
    {
        if (aString[i] === lowerCaseWord)
        {
            result++;
        }
    }
    return result;
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Oefening 2 NOK
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Calculate scrabbleScore of a word
// See letter values here: https://www.playmeo.com/face-value-scrabble-tiles/
// letterMultipliers, an array of objects like this:
// [{index: 2, multiplier: 2}, {index: 5, multiplier: 3}]
// → this would mean the letter with index 2 has to be multiplied by 2
// and the letter with index 5 has to be multiplied by 3
// wordMultiplier → the number of times the word score has to be multiplied
// 'hello', [{index: 2, multiplier: 2}], 1
function scrabbleScoreCalculator(word, letterMultipliers, wordMultiplier) 
{
    let lettersOfWord = word.split('');
    let multipliersKeys = Object.keys(letterMultipliers);
    let onePoint = 'aeioulnstr';
    let twoPoints = 'dg';
    let threePoints = 'bcmp';
    let fourPoints = 'fhvwy';
    let fivePoints = 'k';
    let sixPoints = 'jx';
    let tenPoints = 'qz';
    let score = 0;
    console.log('KEYS');
    console.log(multipliersKeys[0]);
    console.log('LETTERS OF WORD');
    console.log(lettersOfWord);


}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Oefening 3 OK
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Determine if a sentence is a pangram
// https://en.wikipedia.org/wiki/Pangram
// e.g. 'The quick brown fox jumps over the lazy dog' → true
function isPangram(sentence) 
{
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g; //'https://regexr.com/'   ==> 'Regular Expressions' staan altijd tussen '/ /'. 'g' = 'global', dus over de gehele 'sentence'. '/s' = 'spaties'
                       // Zie ook youtube 'https://www.youtube.com/watch?v=909NfO1St0A' of'https://www.youtube.com/watch?v=rhzKDrUiJVk'
    let lowercase = sentence.toLowerCase().replace(regex, ""); // '.replace' vervangt alle spaties in 'sentence' naar 'geen spatie' (dus alles hangt aan elkaar)
   
    for (let i = 0; i < alphabet.length; i++)
        {
            if (lowercase.indexOf(alphabet[i]) === -1)
                {
                return false;
                }
        }
   return true;    
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Oefening 4 OK
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', ['stream', 'pigeon', 'maters'] → ['stream', 'maters']
function findAnagrams(word, possibleAnagrams) 
{
    let regex = /\s/g;
    let lettersOfWord = word.toLowerCase().split('').sort().join('').replace(regex, "");
    let lettersOfAnagrams = [];
    result = [];
   
    for (let i in possibleAnagrams)
    {
        lettersOfAnagrams[i] = possibleAnagrams[i].toLowerCase().replace(regex, "").split('').sort().join('');
    }
        for (let i in lettersOfAnagrams)
       {
            if (lettersOfAnagrams[i] === lettersOfWord)
            {
                result.push(possibleAnagrams[i]);
            }
       }
    return result;
}
