let wins = 0;
let losses = 0;
let draws = 0;
const rockBtnEl = document.querySelectorAll('li.rock__item > button');
const rockTextEl = document.getElementById('message');
const rockMessageRef = document.getElementById('computerChoise');
const rockTextRef = document.getElementById('score');
const rockBtnRef = document.querySelector('.rock__button');
const computerVersionEl = document.getElementById("computerVersion");

rockBtnEl.forEach((item, i) => {
  item.addEventListener('click', event => {
      const userChoise = i;
    const computerChoise = Math.floor(Math.random() * 3);
    chooseWinner(userChoise, computerChoise);
  });
});

const updateScore = (losses, wins, draws) => {
  rockTextRef.textContent = `Рахунок:
Комп’ютер - ${losses}
Ви - ${wins}
Нічия - ${draws}`;
};
computerVersionEl.addEventListener('click', event => {
  rockMessageRef.classList.add("is-active")
})
const computerVersion = (computerChoise) =>{
if(rockMessageRef.classList.contains("is-active")){
  rockMessageRef.textContent = `Варіант комп’ютера: ${computerChoise + 1}`
  rockMessageRef.classList.remove("is-active")
}
}

const chooseWinner = (userChoise, computerChoise) => {
  const draw = 'Нічия';
  const yourWin = 'Ви виграли раунд!';
  const yourLosse = 'Комп’ютер виграв раунд!';

  rockTextEl.classList.remove('colorwin', 'colorlosse', "color__draws");
  if (userChoise === computerChoise) {
    rockTextEl.textContent = draw;
    draws = draws + 1;
    rockTextEl.classList.add('color__draws');
  } else if (
    (userChoise === 0 && computerChoise === 1) ||
    (userChoise === 1 && computerChoise === 2) ||
    (userChoise === 2 && computerChoise === 0)
  ) {
    rockTextEl.textContent = yourWin;
    wins = wins + 1;
    rockTextEl.classList.add('color__win');
  } else if (
    (userChoise === 0 && computerChoise === 2) ||
    (userChoise === 1 && computerChoise === 0) ||
    (userChoise === 2 && computerChoise === 1)
  ) {
    rockTextEl.textContent = yourLosse;
    losses = losses + 1;
    rockTextEl.classList.add('color__losse');
  }
  updateScore(losses, wins, draws);
  computerVersion(computerChoise);

  return rockTextEl.textContent;
};
// const computerLog = (computerChoise) => {
//   rockBtnRef.addEventListener ("click", (event) => {
//     rockMessageRef.value = Варіант комп’ютера:${computerChoise}
//   });
// }