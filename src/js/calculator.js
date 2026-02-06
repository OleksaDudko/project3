const firstNumberEl = document.querySelector(".calculator__number");
const secondNumberEl = document.querySelector(".calculator__secondNumber");
const resultEl = document.querySelector(".calculator__result");

const plusEl = document.querySelector(".calculator__plus");
const multiplyEL = document.querySelector(".calculator__multiply");
const divideEl = document.querySelector(".calculator__divide");
const minusEl = document.querySelector(".calculator__minus");
const calculateEl = document.querySelector(".calculator__calculate");

calculateEl.addEventListener("click", () => {
    // console.log(firstNumberEl.value);
    // console.log(secondNumberEl.value);
    
    plusEl.addEventListener("click", () => {
        plusEl.classList.add("active1")
    })
    multiplyEL.addEventListener("click", () => {
        plusEl.classList.add("active2")
    })
    divideEl.addEventListener("click", () => {
        plusEl.classList.add("active3")
    })
    minusEl.addEventListener("click", () => {
        plusEl.classList.add("active4")
    })
    const num1 = Number(firstNumberEl.value);
    const num2 = Number(secondNumberEl.value);
    let total = 0;
    if (plusEl.classList.contains("active1")) {
        total = num1 + num2;
        resultEl.textContent = total;
        plusEl.classList.remove("active1");
    } else if(plusEl.classList.contains("active2")){
        total = num1 * num2;
        resultEl.textContent = total;
        plusEl.classList.remove("active2");
    } else if (plusEl.classList.contains("active3")) {
        total = num1 / num2;
        resultEl.textContent = total;
        plusEl.classList.remove("active3");
        if (num2 === 0) {
            resultEl.textContent = "неможливо"
        }
    } else if (plusEl.classList.contains("active4")) {
        total = num1 - num2;
        resultEl.textContent = total;
        plusEl.classList.remove("active4");
    }
    
})


// plusEl.addEventListener("click", () => {
//     const action = Number(firstNumberEl.value) + Number(secondNumberEl.value);
//     calculateEl.addEventListener("click", () => {
    // console.log(firstNumberEl.value);
    // console.log(secondNumberEl.value);
    // console.log(action);
    

    // function action(finalResult, resultEl) {
    //     finalResult = Number(resultEl.textContent);
    // }
    // console.log(action);
    
// })
// })

// function plus(firstNumberEl, secondNumberEl) {
//     const finalResult =  firstNumberEl + secondNumberEl;
//     console.log(finalResult);
    
// }