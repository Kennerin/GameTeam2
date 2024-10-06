let button = document.getElementById("btn");
let wordToGuess = "water";
let arrayWater = [];
for (let i = 0; i < wordToGuess.length; i++) {
  arrayWater.push(wordToGuess[i]);
}
let play = false;
let attemptNumber = 1;
function guessCheck() {
  if (attemptNumber < 5) {
    const suggestion = prompt("Enter a word with 5 letters: ");
    let suggestionArray = [];
    for (let i = 0; i < suggestion.length; i++) {
      suggestionArray.push(suggestion[i]);
    }
    let resultArray = ["grey", "grey", "grey", "grey", "grey"];
    for (let i = 0; i < wordToGuess.length; i++) {
      // when the letter is equal to wordToGuess make it green
      if (wordToGuess.indexOf(suggestion[i]) !== -1) {
        resultArray[i] = "yellow";
      }
      if (arrayWater[i] === suggestionArray[i]) {
        resultArray[i] = "green";
      }
    }
    const letter1 = document.querySelector(`.letter${attemptNumber}1`);
    const letter2 = document.querySelector(`.letter${attemptNumber}2`);
    const letter3 = document.querySelector(`.letter${attemptNumber}3`);
    const letter4 = document.querySelector(`.letter${attemptNumber}4`);
    const letter5 = document.querySelector(`.letter${attemptNumber}5`);
    letter1.innerHTML = suggestionArray[0];
    letter1.setAttribute("style", `background-color:${resultArray[0]};`);
    letter2.innerHTML = suggestionArray[1];
    letter2.setAttribute("style", `background-color:${resultArray[1]};`);
    letter3.innerHTML = suggestionArray[2];
    letter3.setAttribute("style", `background-color:${resultArray[2]};`);
    letter4.innerHTML = suggestionArray[3];
    letter4.setAttribute("style", `background-color:${resultArray[3]};`);
    letter5.innerHTML = suggestionArray[4];
    letter5.setAttribute("style", `background-color:${resultArray[4]};`);
    if (wordToGuess == suggestion) {
      attemptNumber = 5;
      button.disabled = true;
      alert("⭐⭐⭐ You won ⭐⭐⭐");
    }
    attemptNumber += 1;
  } else {
    button.disabled = true;
    alert("There are no more attempts");
  }
}