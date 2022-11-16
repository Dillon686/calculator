const screen = document.querySelector("p");
const numberButtons = document.querySelectorAll(".number-button")
const clearButton = document.querySelector("#clear")
const operatorButtons = document.querySelectorAll(".operator-button")
const equalButton = document.querySelector("#equal-button")
let operatorSelection = ""
let num1 = 0;
let num2 = 0;

numberButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        screen.textContent += e.target.textContent;
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        operatorSelection = btn.id;
        num1 = parseInt(screen.textContent);
        screen.textContent = '';

    })
})

clearButton.addEventListener('click', function(){
    screen.textContent = "";
    num1 = 0;
    num2 = 0
    operatorSelection = ""
})

equalButton.addEventListener('click', function(){
   num2 = parseInt(screen.textContent); 
   if (num2 > 0){
    screen.textContent = operate(num1, num2, operatorSelection);
    num1 = screen.textContent;
    num2 = 0;
   }
})

/*Operation functions below */
function add(a, b){
    let total = a;
    total += b;
    return total;
}

function subtract(a, b){
    let total = a;
    total -= b;
    return total;
}

function multiply(a, b){
    let total = a;
    total *= b;
    return total;
}

function divide(a, b){
    let total = a;
    total /= b;
    return total;
}

function operate(num1, num2, operator){
    if (operator === "addition"){
        return add(num1, num2);
    }else if (operator === "subtraction"){
        return subtract(num1, num2);
    }else if (operator === "multiplication"){
        return multiply(num1, num2);
    }else if (operator === "division"){
        return divide(num1, num2);
    }
}