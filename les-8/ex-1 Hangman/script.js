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
        let clickedLetter = event.target.innerText;
        compareLetter(clickedLetter, randomWord);
      }
  }    
 
  // ------------------------------------------------------------------

  function compareLetter(clickedLetter,randomWord)
  {  
    let found = gameState.lettersFound;
    console.log(clickedLetter);
    if (randomWord.indexOf(clickedLetter) >= 0) 
    {
      gameState.turn++;
      found++;
      winOrLose(found);
    } 
    if (randomWord.indexOf(clickedLetter) === -1) 
    {
      gameState.turn++;
      gameState.lettersFound++;
      winOrLose(found);
    }
  console.log(clickedLetter);
  console.log(gameState); 
  console.log(randomWord);
  } 

  // ------------------------------------------------------------------

  function winOrLose(found)
  {
    if (found === gameState.word.length)
      {
        gameState.won = true;
      }
      else
        {
          gameState.won = false;
        }
    if (gameState.hangman === 9)
        {
          gameState.lost = true;
        }
      else
        {
          gameState.lost = false;
        }
  }

  // -------------------------------------------------------------------
  
  window.onload = initGameState(),setClassForLetters(),setHangmanPicture(),setSolutionContainer(),setWinOrLoseContainer();
  letterContainer.addEventListener('click', chooseLetter);

 
  