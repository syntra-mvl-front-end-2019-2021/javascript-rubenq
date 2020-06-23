const randomWords = [
    'condition',
    'bottom',
    'lineage',
    'trip',
    'reporter',
    'paper',
    'colorful',
    'agent',
    'justify',
    'torture',
    'cap',
    'earthflax',
    'payment',
    'research',
    'picture',
    'garage',
    'honor',
    'memorial',
    'planet',
    'biography',
    'profound',
    'rumor',
    'gear',
    'bedroom',
    'orthodox',
    'penalty',
    'grief',
    'promote',
    'roof',
    'suite',
    'moving',
    'killer',
    'museum',
    'essay',
    'fever',
    'dignity',
    'shadow',
    'enjoy',
    'kill',
    'shy',
    'counter',
    'pawn',
    'button',
    'bullet',
    'skin',
    'rate',
    'shop',
    'consider',
    'other',
    'prospect',
  ];
  const hangManImage = document.querySelector('#image');
  let solutionContainer = document.querySelector('#solution-container');
  const winOrLoseContainer = document.querySelector('#win-lose-container');
  const letterContainer = document.querySelector('#letter-container');
  const letters = document.getElementsByClassName('letter');
  const gameState = {
    word: [],
    hangman: 1,
    turn: 1,
    lettersFound: 0,
    won: false,
    lost: false,
  };
  
  function initGame() 
  {
    let letter = letterContainer.children;
    gameState.word = randomWords[Math.floor(Math.random() * randomWords.length)];
    gameState.hangman = 1;
    gameState.turn = 1;
    gameState.lettersFound = 0;
    gameState.won = false;
    gameState.lost = false;
    // Set class to 'letter' for children inside 'letter-container'.
      for (let i = 0; i < letter.length; i++)
      {
        letter[i].setAttribute('class', 'letter');
      }
    // Set 'hangManImage' to 'hangman01.png'.
    hangManImage.setAttribute('src', 'images/hangman01.png');
    // Set 'solutionContainer' to equal letters of randomWord.
      for (let i = gameState.word.length; i > 0; i--)
      {
        solutionContainer.innerHTML += '<div class="solution-letter"></div>';
      }
    // Set 'winOrLoseContainer' to empty.
    winOrLoseContainer.innerHTML = '';
  }
  
  function clickLetter(event) {
    // check if event.target is .letter
    // check if event.target has success or failed class
    // ---
    checkLetter();
    winOrLose();
  }

  function checkLetter();
  for (let i = 0; i > word.length; i++)
  {
    if (letter == word[i])
    {

    }
  }
  

 letters.forEach(function(letters) {letters.addEventListener('click', clickLetter)});

  function winOrLose()
  {
    if (gameState.lettersFound === gameState.word.length)
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
    console.log(gameState.won);
    
  }
  initGame();