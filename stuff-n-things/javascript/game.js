let game = {
  run: false,
  wins: 0,
  losses: 0,
  guesses: 0,
  correctLettersGuessed: [],
  wordsArrayIndex: -1,
  wordsArray: [
    "element",
    "hat",
    "bird",
  ],

  winsDiv: document.getElementById('wins'),
  lossesDiv: document.getElementById('losses'),
  lettersGuessedDiv: document.getElementById('guesses'),
  guessesLeftDiv: document.getElementById('gLeft'),
  lettersList: document.getElementById('letters'),

  reset: function () {
    guesses = 0;
    this.run = true;
    this.wordsArrayIndex++;
    this.lettersGuessed = [];
    this.correctLettersGuessed = [];
    this.createWordList();
  },

  guess: function (key) {
    let word = this.wordsArray[this.wordsArrayIndex];
    let lastLetterIndex = word.lastIndexOf(key);
    let i = 0;
    let correctLetters = 0;
    const textDiv = document.getElementById("Hangman and/or text");

    while ((i != lastLetterIndex || word[i] == key) && i != (word.length)) {
      if (word[i] == key) {
        console.log("Correct letter");
        correctLetters++;
        var correctLetter = document.getElementById(i);
        correctLetter.innerText = key;
        // this.lettersGuessedDiv.appendChild(key);
      }
      i++;
    }
    
    this.lettersGuessedDiv.innerText = key;
    this.guesses++;
    this.guessesLeftDiv.innerText = "Guesses Remaining: " + (10 - this.guesses);
    if (correctLetters == word.length){
      textDiv.innerHTML = "<h1> you won, press start again for new word </h1>";
      this.run == false;
      this.wins++;
      this.winsDiv.innerText = "Wins: " + this.wins;
    }

    if (this.guesses == 10) {
      textDiv.innerHTML = "<h1> you lost </h1>";
      this.run == false;
      this.losses++;
      this.lossesDiv.innerText = "Losses: " + this.losses;
    }
  },

  createWordList: function () {
    console.log("create word list");
    let word = this.wordsArray[this.wordsArrayIndex];
    for(let i = 0; i < word.length; i ++){
      console.log("create word list for loop")
      var listElement = document.createElement("h1");
      listElement.setAttribute('class', 'list-item');
      listElement.setAttribute('id', i);
      var _holder = document.createTextNode("__");
      listElement.appendChild(_holder);
      this.lettersList.appendChild(listElement);
    }
  },
}
    // for (i in word){

    // }


    // console.log("entered result");
    // wordHolder = document.getElementById('letters');
    // wordList = document.createElement('ul');
    // 
    // for (let i = 0; i < word.length; i++) {
    //   console.log("forLoop");
    //   wordLetterList = document.createElement('li');
    //   wordLetterList.setAttribute('class', 'list-item');
    //   if (word[i] === letter) {
    //     wordLetterList.innerHTML = "letter";
    //   }
    //   else {
    //     wordLetterList.innerHTML = "__";
    //   }
    //   wordList.appendChild(wordLetterList)
    // }
//     for (var i = 0; i < word.length; i++) {
//       correct.setAttribute('id', 'my-word');
//       guess = document.createElement('li');
//       guess.setAttribute('class', 'guess');
//       if (word[i] === "-") {
//         guess.innerHTML = "-";
//         space = 1;
//       } else {
//         guess.innerHTML = "_";
//       }

//       geusses.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   }
const clickHandler = function (event) {
  game.reset();
}
const keyHandler = function (event) {
  const key = event.key;
  if (game.run) {
    game.guess(key);
  }
}
let start = document.getElementById("start");
document.onkeyup = keyHandler;
start.onclick = clickHandler;