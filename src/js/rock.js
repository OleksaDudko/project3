let wins = 0;
let losses = 0;
let draws = 0;
const rockBtnEl = document.querySelectorAll("li.rock__item > button");
const rockTextEl = document.getElementById("message");
const rockTextRef = document.getElementById("score");

rockBtnEl.forEach((item, i) => {
  item.addEventListener("click", (event) => {
    const userChoise = i;
    const computerChoise = Math.floor(Math.random() * 3);
    chooseWinner(userChoise, computerChoise);
  });
});

const updateScore =(losses, wins,draws) => {
    rockTextRef.textContent = 
`Рахунок:
Комп’ютер - ${losses}
Ви - ${wins}
Нічия - ${draws}`;
}

const chooseWinner = (userChoise, computerChoise) => {
  const draw = "Нічия";
  const yourWin = "Ви виграли раунд!";
  const yourLosse = "Комп’ютер виграв раунд!";

  if (userChoise === computerChoise) {
    rockTextEl.textContent = draw;
    draws = draws + 1;
  } else if (userChoise === 0 && computerChoise === 1) {
    rockTextEl.textContent = yourWin;
    wins = wins + 1
  } else if (userChoise === 0 && computerChoise === 2) {
    rockTextEl.textContent = yourLosse;
    losses = losses +1
  } else if (userChoise === 1 && computerChoise === 0) {
    rockTextEl.textContent = yourLosse;
    losses = losses +1
  } else if (userChoise === 1 && computerChoise === 2) {
    rockTextEl.textContent = yourWin;
    wins = wins + 1
  } else if (userChoise === 2 && computerChoise === 0) {
    rockTextEl.textContent = yourWin;
    wins = wins + 1
  } else if (userChoise === 2 && computerChoise === 1) {
    rockTextEl.textContent = yourLosse;
    losses = losses +1
  }
  updateScore (losses, wins,draws )
  
  return rockTextEl.textContent
};