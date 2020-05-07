
// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
console.log('Oefening 1');
let array = [1,3,7,11,2];
let largestVal;
    function getLargestItemInArray(array) 
    {
        for (i = 1; i < array.length; i++) 
        {
                if (array[i] > i) 
                    largestVal = array[i]; 
            
            console.log(largestVal);
        }
    }
     
// Reverse order of array, e.g. [1,2,3] → [3,2,1]
console.log('Oefening 2');
let anArray = [1,2,3,4];
let numArray = anArray.length;

    function reverseArray(anArray) 
    {
        for (i = numArray.length-1; i >= 0; i--) 
        {
            console.log(anArray[i]);
        }
    }

// Make a sum of all elements, e.g. [1,2,3] → 6
function arraySum(anArray) {

}

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {

}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
function combineArrays(arrayOne, arrayTwo) {

}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
function numberToDigitArray(aNumber) {

}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {

}

// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
// if (iets = 'h') {
// iets doen
// } else if (iets = 'e') {
    
// }...

// switch (iets) {
//     case 'H':
//     case 'h':
//         console.log('h');
//         break;
//     case 'e':
//         console.log('e');
//         break;
//     default:
//         console.log('kweetnie');
//         break;    
// }

function translateToMorse(aString) {

}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {

}