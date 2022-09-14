const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
let score = 10;
// let topScore = 0;
let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore;

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  if (!guessInput) {
    msg.innerText = "Please enter a number";
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-stars fa-2x"></i>`;
    body.className = "bg-success";
    if (score >= topScore) {
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    if (--score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `DECREASE <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `INCREASE <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
    } else {
      msg.innerHTML = `You Lost <i class="fa-solid fa-face-sad-cry fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      document.querySelector(".check-btn").disabled = true;
      body.className = "bg-danger";
    }

    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again-btn").addEventListener(`click`, () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").className = " #2d3436";
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").textContent = "Starting";
});
