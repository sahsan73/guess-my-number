"use strict";

////////////////////////////////////////////////////////////////////
// Mobile Info icon
const infoMobileBtnEl = document.querySelector(".btn-mobile-info");
infoMobileBtnEl.addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("info-open");
  document.querySelector(".overlay").classList.toggle("hidden");
});

////////////////////////////////////////////////////////////////////
// Game Logic
let reveal = document.querySelector(".number");
// body is an element, so don't need to specify period in querySelector
// added El (element) in the variable name, just NOT to confuse with the element name
let bodyEl = document.querySelector("body");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let currentScore = 20,
  highScore = 0;

const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".check").addEventListener("click", function () {
  // empty string will be converted to 0
  const gussedNumber = Number(document.querySelector(".guess").value);
  console.log(gussedNumber);

  // when there is no input
  if (!gussedNumber) {
    displayMessage("⛔ No Number");
  }
  // when player wins
  else if (gussedNumber === secretNumber) {
    displayMessage("🎉 Correct - u did it!");
    reveal.textContent = secretNumber;

    bodyEl.classList.add("correct-guess");
    document.querySelector(".number").classList.add("scale-reveal");

    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // when guess is incorrect
  else if (gussedNumber !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(
        gussedNumber > secretNumber ? "📈 Too high" : "📉 Too low"
      );
      --currentScore;
      document.querySelector(".score").textContent = currentScore;
    }
    // when player loses the game
    else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      bodyEl.classList.add("lose-game");
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = currentScore;
  reveal.textContent = "?";
  document.querySelector(".guess").value = "";

  bodyEl.classList.remove("correct-guess");
  document.querySelector(".number").classList.remove("scale-reveal");
  bodyEl.classList.remove("lose-game");
});
