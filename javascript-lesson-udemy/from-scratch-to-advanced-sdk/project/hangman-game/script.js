const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const messageElement = document.getElementById("success-message");
const wrongLettersElement = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");
const buttonAgain = document.getElementById("play-again");
const messageWrongElement = document.getElementById("message");

const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

buttonAgain.addEventListener("click", function () {
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = getRandomWord();

  displayWord();
  updateWrongletters();

  popup.style.display = "none";
});

function getRandomWord() {
  const words = ["javascript", "html", "css", "python"];

  return words[Math.floor(Math.random() * words.length)];
}

function updateWrongletters() {
  wrongLettersElement.innerHTML = `
  ${wrongLetters.length > 0 ? "<h3>Wrong Letters</h3>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  items.forEach((item, index) => {
    const errorCount = wrongLetters.length;

    if (index < errorCount) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  if (wrongLetters.length === items.length) {
    popup.style.display = "flex";
    messageElement.innerHTML = "You Lost The Game!!!";
  }
}

function displayWord() {
  wordElement.innerHTML = `
      ${selectedWord
        .split("")
        .map(
          (letter) => `
          <div class="letter">
              ${correctLetters.includes(letter) ? letter : ""}
          </div>
      `
        )
        .join("")}
  
  `;

  const wordAll = wordElement.innerText.replace(/\n/g, "");
  if (wordAll === selectedWord) {
    popup.style.display = "flex";
    messageElement.innerHTML = "Congratulations You Won!!!";
  }
}

function diplayMessage() {
  messageWrongElement.classList.add("show");

  setTimeout(function () {
    messageWrongElement.classList.remove("show");
  }, 2000);
}
window.addEventListener("keydown", function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
        console.log(letter);
      } else {
        diplayMessage();
        messageWrongElement.classList.add("show");
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        //wrong letter update!!
        updateWrongletters();
      }
    }
  }
});
displayWord();
