const screen = document.querySelector("p");
const numberButtons = document.querySelectorAll(".number-button")
const clearButton = document.querySelector("#clear")
const operatorButtons = document.querySelectorAll(".operator-button")
const equalButton = document.querySelector("#equal-button")
let operatorSelection = ""
let num1;
let num2;
let array = []
let formattedArrayString;

numberButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        if (num1){
            array.push(e.target.textContent);
            formattedArrayString = array.toString();
            formattedArrayString = formattedArrayString.replaceAll(',', '');
            screen.textContent = formattedArrayString;
        }
        else{
            screen.textContent += e.target.textContent;
        }
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        /*operatorSelection = btn.id;
        num1 = parseInt(screen.textContent);
        screen.textContent = ""*/

        if (operatorSelection !== ""){
            num2 = parseInt(screen.textContent);
            num1 = operate(num1, num2, operatorSelection);
            screen.textContent = num1;
            operatorSelection = btn.id;
            array = [];
        }else if (operatorSelection === ""){
            operatorSelection = btn.id;
            num1 = parseInt(screen.textContent);
            screen.textContent = "";
        }
    })
})

equalButton.addEventListener('click', function(){
    num2 = parseInt(screen.textContent); 
    screen.textContent = operate(num1, num2, operatorSelection);
    num1 = parseInt(screen.textContent);
    num2 = 0;
    operatorSelection = "";
    array = [];
 })

clearButton.addEventListener('click', function(){
    screen.textContent = "";
    num1 = 0;
    num2 = 0
    operatorSelection = ""
    array = [];
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

    if (isFinite(total)){
        return total;
    }else {
        return "ERROR";
    }
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