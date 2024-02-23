const guess = document.querySelector(".guess")
const element = document.querySelector("span")
const input = document.querySelector("input")
const winorloose = document.querySelector("p")
const win = document.querySelector(".win")
const loose = document.querySelector(".loose")
const draw = document.querySelector(".draw")
const consider = document.querySelector(".content")
const playAgain = document.querySelector(".play-again")
let winCount = 0
let looseCount = 0

function guessNum() {
  if (winCount >= 20) {
    window.alert("YOU W0N (TWENTY TIMES), COMPUTER LOOSED")
    playAgain.classList.add("Visible")
    return
  } else if (looseCount >= 20) {
    window.alert("YOU LOOSED, COMPUTER WON (TWENTY TIMES)")
    playAgain.classList.add("Visible")
    return
  }
  if (isNaN(input.value)) {
    window.alert("PLEASE INPUT A NUMERIC VALUE BETWEEN 0 AND 20")
    input.value = ""
    return
  }
  if (input.value.trim() && input.value.trim() <= 20) {
    guess.textContent = "Guess Again"
    const randomNumber = Math.floor((Math.random() * 20) + 1)
    element.textContent = `You picked ${parseInt(input.value)}, Computer picked ${randomNumber}`
    if (randomNumber === parseInt(input.value)) {
      winorloose.textContent = "YOU WIN"
      winCount++
      win.textContent = `WINS: ${winCount}`
    } else {
      winorloose.textContent = "YOU LOOSE"
      looseCount++
      loose.textContent = `LOOSES: ${looseCount}`
    }
  } 

}


guess.addEventListener("click", () => {
  guessNum()
  document.querySelector("input").value = ""
})

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    guessNum()
  }
})

function resetGame() {
  winCount = 0;
  looseCount = 0;
  win.textContent = "";
  loose.textContent = "";
  guess.textContent = "Guess";
  element.textContent = "";
  winorloose.textContent = "";
  playAgain.classList.remove("Visible")
  input.value = "";
}

playAgain.addEventListener("click", () => {
  resetGame();
});
