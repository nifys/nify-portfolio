const input = document.getElementById("question");
const btn = document.getElementById("askBtn");
const ball = document.getElementById("ball");
const ballContainer = document.getElementById("ballContainer");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

const answers = [
  "ДА",
  "НЕТ",
  "50/50",
  "СКОРО",
  "ТОЧНО ДА",
  "ПОКА НЕТ",
  "ВЕРЬ В СЕБЯ",
  "СНАЧАЛА ПОДУМАЙ",
  "СОМНЕВАЮСЬ",
  "УДАЧА РЯДОМ",
  "ПЕРЕВОРОТ",
  "НЕ СПЕШИ"
];

function randomAnswer() {
  return answers[Math.floor(Math.random() * answers.length)];
}

function animateBall() {
  const lane = document.querySelector(".lane");
  const laneWidth = lane.clientWidth;
  const endX = laneWidth - 160;

  ball.classList.add("rolling");

  ballContainer.animate(
    [
      { left: "0px", offset: 0 },
      { left: `${endX * 0.35}px`, offset: 0.35 },
      { left: `${endX * 0.72}px`, offset: 0.7 },
      { left: `${endX}px`, offset: 1 }
    ],
    {
      duration: 2200,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      fill: "forwards"
    }
  );

  setTimeout(() => {
    ball.classList.remove("rolling");
  }, 2200);
}

btn.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    input.focus();
    input.style.borderColor = "rgba(255, 100, 100, 0.7)";
    setTimeout(() => {
      input.style.borderColor = "rgba(255, 215, 0, 0.15)";
    }, 500);
    return;
  }

  resultBox.classList.remove("visible");
  ballContainer.style.left = "0px";

  setTimeout(() => {
    animateBall();
  }, 100);

  setTimeout(() => {
    resultText.textContent = randomAnswer();
    resultBox.classList.add("visible");
  }, 2050);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
