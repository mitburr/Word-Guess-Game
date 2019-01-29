let game = {
  run: false,
  wins: 0,
  losses: 0,
  guesses: 0,
  lettersGuessed : [],
  wordsArrayIndex : 0,
  wordsArray : [
    "element",
    "hat",
    "bird",
  ],

  reset: function(){
    guesses = 0;
    this.run = true;
  },

  guess: function(key){
    let word = this.wordsArray[this.wordsArrayIndex];
    let lastLetterIndex = word.lastIndexOf(key);
    let i = 0; 
    let correctLetters = 0;
    while ((i != lastLetterIndex || word[i] == key) && i != (word.length)){
      if (word[i] == key){
        console.log("Correct letter");
        correctLetters++;
      }
      i ++;
    }
    this.guesses++;
    if(guesses == 10){
      const textDiv = document.getElementById("Hangman and/or text");
      textDiv.innerHTML("<h1> you lost </h1>");
      this.run == false;
    }
  },
}
result = function () {
    wordHolder = document.getElementById('letters');
    correct = document.createElement('ul');
    correct.appendChild("test")
}
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
const clickHandler = function(event){
  game.reset();
}
const keyHandler = function(event){
  const key = event.key;
  if (game.run) {
    game.guess(key);
  }
}
let start = document.getElementById("start");
document.onkeyup = keyHandler;
start.onclick = clickHandler;