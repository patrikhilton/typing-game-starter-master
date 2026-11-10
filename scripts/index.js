// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];  // pick a random word
  word.textContent = randomWord;                                 // show it on the page
}

function updateScore() {
  score++;
  scoreEl.textContent = score;
}


text.addEventListener("input", function () {
  if (text.value === randomWord) {
     updateScore();
    addWordToDOM();
    time += 5;
    text.value = "";
  }
});

addWordToDOM();   // run it once, so a word shows when the game starts

function updateTime() {
  time--;
  timeEl.textContent = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Play again</button>
  `;
  endgameEl.style.display = "flex";
}

const timeInterval = setInterval(updateTime, 1000);