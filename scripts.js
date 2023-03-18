const correctAnswers = [
    "meet me at the red fort",
    "paranthe wali gali",
    "rival merchant shop",
    "plate of red spices"
];

function checkAnswer(index) {
    const answerInput = document.getElementById(`answer-${index}`);
    const answer = answerInput.value.trim().toLowerCase();

    const correctWords = correctAnswers[index - 1].split(' ');
    let partialMatch = false;

    for (let i = 0; i < correctWords.length; i++) {
        if (answer.includes(correctWords[i])) {
            partialMatch = true;
            break;
        }
    }

    if (partialMatch) {
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
        alert("Try again!");
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
