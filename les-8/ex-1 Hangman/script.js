const randomWords = ['condition','bottom','lineage','trip','reporter','paper','colorful','agent','justify','torture','cap','earthflax','payment','research','picture','garage','honor','memorial','planet','biography','profound','rumor','gear','bedroom','orthodox','penalty','grief','promote','roof','suite','moving','killer','museum','essay','fever','dignity','shadow','enjoy','kill','shy','counter','pawn','button','bullet','skin','rate','shop','consider','other','prospect',];
const hangManImage = document.querySelector('#image');
let solutionContainer = document.querySelector('#solution-container');
const winOrLoseContainer = document.querySelector('#win-lose-container');
const letterContainer = document.querySelector('#letter-container');
const letters = document.getElementsByClassName('letter');
let letter = letterContainer.children;
const gameState = 
{
  word: [],
  hangman: 1,
  turn: 0,
  lettersFound: 0,
  won: false,
  lost: false,
};

// let turn = gameState['turn'];
// let lettersFound = gameState['lettersFound'];
// let hangman = gameState['hangman'];
// let won = gameState['won'];
// let lost = gameState['lost'];

  // -----------------------------------------------------------------
  
  function initGameState() 
  {
    gameState.word = randomWords[Math.floor(Math.random() * randomWords.length)];
    gameState.hangman = 1;
    gameState.turn = 0;
    gameState.lettersFound = 0;
    gameState.won = false;
    gameState.lost = false;
  }

  // -----------------------------------------------------------------

  function setClassForLetters()
  {
    for (let i = 0; i < letter.length; i++)
    {
      letter[i].setAttribute('class', 'letter');
    }
  }

  // -----------------------------------------------------------------

  function setHangmanPicture()
  {  
    hangManImage.setAttribute('src', 'images/hangman01.png');
  } 

  // -----------------------------------------------------------------

  function updateHangmanPicture(hangman) 
  {
    document.getElementById('image').src = 'images/hangman0' + hangman + '.png';
  }

  // -----------------------------------------------------------------

  function setSolutionContainer()
  {

    for (let i = gameState.word.length; i > 0; i--)
    {
      solutionContainer.innerHTML += '<div class="solution-letter"></div>';
    }
  }    
  
  // -----------------------------------------------------------------

  function setWinOrLoseContainer()
  {
    winOrLoseContainer.innerHTML = '';
  }
  
  // ------------------------------------------------------------------

  function chooseLetter(event)
  {
    let randomWord = gameState.word.split('');
  
    if (event.target !== event.currentTarget)
      {
        let clickedLetter = event.target.innerText.toLowerCase();
        compareLetter(clickedLetter, randomWord);
      }
  }    
 
  // ------------------------------------------------------------------

  function compareLetter(clickedLetter,randomWord)
  {  
    if (randomWord.indexOf(clickedLetter) >= 0) 
    {
      // letter[clickedLetter].setAttribute('class', 'letter success');
      // console.log(letter);
      gameState.turn++;
      gameState.lettersFound++;
      winOrLose(randomWord);
    } 
    else if (randomWord.indexOf(clickedLetter) === -1) 
    {
      gameState.turn++;
      gameState.hangman++;
      updateHangmanPicture(gameState.hangman);
      winOrLose();
    }
  console.log(clickedLetter);
  console.log(lettersFound); 
  console.log(randomWord);
  console.log(gameState);
  
  } 

  // ------------------------------------------------------------------

  function winOrLose(randomWord)
  {
    let lettersFound = gameState.lettersFound;
    let hangman = gameState.hangman;
    if (lettersFound === randomWord.length)
      {
        winOrLoseContainer.innerHTML = 'Je hebt gewonnen!';
      }
    else if (hangman === 10)
        {
          winOrLoseContainer.innerHTML = 'Je hebt verloren! Het woord dat we zochten was '+ randomWord;
        }
        console.log(hangman);
  }

  // -------------------------------------------------------------------
  
  window.onload = initGameState(),setClassForLetters(),setHangmanPicture(),setSolutionContainer(),setWinOrLoseContainer();
  letterContainer.addEventListener('click', chooseLetter);

 
  