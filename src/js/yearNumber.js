
const inputYearRef = document.querySelector(".yearNumber__year");
const btnYearRef = document.querySelector(".yearNumber__button");
const textYearRef = document.querySelector('.yearNumber__description');
 

btnYearRef.addEventListener("click", () => {
  let value = Number(inputYearRef.value);
    console.log(value);
    if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
        textYearRef.textContent = "Ви народилися у високосний рік!";
        textYearRef.style.color = "green"
        console.log("Ви народилися у високосний рік!");
        textYearRef.style.color = "none"; 
    }
    else {
        
        textYearRef.textContent = "Ви народилися не у високосний рік!";
        textYearRef.style.color = "red";
    console.log("Ви народилися не у високосний рік!");
  }
});



const inputNumberRef = document.querySelector(".yearNumber__number");
const btnNumberRef = document.querySelector(".yearNumber__btn");
const textNumberRef = document.querySelector(".yearNumber__p");

let randomNumber = Math.floor(Math.random() * 10) + 1;

btnNumberRef.addEventListener("click", () => {
  const value = Number(inputNumberRef.value);

  if (value === randomNumber) {
    textNumberRef.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
    textNumberRef.style.color = "green";
  } else {
    textNumberRef.textContent = `Нажаль, ви не вгадали число! (${randomNumber})`;
    textNumberRef.style.color = "red";
  }
  randomNumber = Math.floor(Math.random() * 10) + 1;
});