const correctAnswers = [
  "meet me at the red fort",
  "paranthe wali gali",
  "rival merchant shop",
  "plate of red spices",
];

const wrongAnswerHints = [
  "Think about a historical monument in red!",
  "It's a famous street known for its delicious parathas!",
  "It's a competitor's place!",
  "It's a common ingredient in Indian cuisine and has a fiery color!",
];

function showModal(index, answer) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Congratulations!</h3>
      <p>You are correct! The answer is <strong>${answer}</strong>.</p>
      <button onclick="closeModal()">Continue</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  document.body.removeChild(modal);
}

function getRandomHint(index) {
  const hints = wrongAnswerHints[index - 1].split(";");
  return hints[Math.floor(Math.random() * hints.length)];
}

function checkAnswer(index) {
  const answerInput = document.getElementById(`answer-${index}`);
  const answer = answerInput.value.trim().toLowerCase();

  const correctWords = correctAnswers[index - 1].split(" ");
  let partialMatch = false;

  for (let i = 0; i < correctWords.length; i++) {
    if (answer.includes(correctWords[i])) {
      partialMatch = true;
      break;
    }
  }

  if (partialMatch) {
    showModal(index, correctAnswers[index - 1]);
    const currentMystery = document.getElementById(`mystery-${index}`);
    currentMystery.classList.add("hidden");

    if (index === correctAnswers.length) {
      const final = document.getElementById("final");
      final.classList.remove("hidden");
    } else {
      const nextMystery = document.getElementById(`mystery-${index + 1}`);
      nextMystery.classList.remove("hidden");
    }
  } else {
    alert(`Try again!\nHint: ${getRandomHint(index)}`);
  }
}

function mystery_1() {
  const intro = document.querySelector("p");
  const startButton = document.querySelector("button");
  intro.classList.add("hidden");
  startButton.classList.add("hidden");
  const mystery1 = document.getElementById("mystery-1");
  mystery1.classList.remove("hidden");
}
