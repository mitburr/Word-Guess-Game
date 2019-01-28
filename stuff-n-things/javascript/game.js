let game = {
  wins: 0,
  losses: 0,
  guesses: 0,
  lettersGuessed : [],
  wordsArrayIndex : 0,
  wordsArray : [
    "butt",
    "hat",
    "slut",
  ],

  start: function(key){
    guesses = 0;
    this.wordsArrayIndex++;
    let marker = key;
    console.log("test");
  },

  guess: function(key){
    let word = this.wordsArray[this.wordsArrayIndex];
    console.log(word);
    let lastLetterIndex = word.lastIndexOf(key);
    let i = 0;
    while (i != lastLetterIndex){
      if (word[i] == guess){
        console.log("test");
      }
      i ++
    }
  },
}
// result = function () {
//     wordHolder = document.getElementById('letters');
//     correct = document.createElement('ul');
//     correct.appendChild()
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
const keyHandler = function(event){
  const key = event.key;
  if (key == 1){
    game.start(key);
  }
  else{
    game.guess(key);
  }
}
document.onkeyup = keyHandler;