const displayScreen = document.querySelector(".calc-screen");
const buttonPad = document.querySelector(".calc-buttons-container");
let firstValue = "";
let secondValue = "";
let result = "";
let lastPressed = "";
let operator = "";
let userInput = "";

document.addEventListener("click", function(event){
    let key = event.target;

    if (key.classList.contains("number")){
        if (key.closest("button")){
            appendNumber(key.textContent)
            updateDisplay()
        }
    }
    else if(key.classList.contains("operator")){
        const selectOperator = document.querySelectorAll(".operator")
        selectOperator.forEach(function(key){
            key.classList.remove("pressed");
        })
        if(key.id == "add" || key.id == "subtract" || key.id == "multiply" || key.id == "divide"){
            chooseOperator(key.id);
            key.classList.add("pressed");
        }
        else if (key.id == "equality"){
            calculate(operator);
            updateDisplay();
        }
        else if (key.id == "refresh"){
            refresh();
            updateDisplay();
        }
        else if (key.id == "backspace"){
            backspace();
            updateDisplay();
        }
    }    
    else return;
        

});

//Functions
function refresh(){
    firstValue = "";
    secondValue = "";
    result = "";
    lastPressed = "";
    operator = "";
    userInput = "";
}
function appendNumber(number){
    if(number === "." && userInput.includes(".")) return;
    if(userInput == result){
        userInput = "";    
    }
    userInput = userInput.toString() + number.toString()
}
function chooseOperator(operand){
    if(userInput === "") {
        operator = operand;
        return
    }
    if(firstValue != ""){
        calculate(operator)
        updateDisplay()
    }
    operator = operand;
    firstValue = userInput; 
    userInput = "";
}
function calculate(operator){
    secondValue = userInput;
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if(isNaN(firstValue) || isNaN(secondValue)) return;
    switch(operator){
        case "add":
            result = (firstValue + secondValue);
            break;
        case "subtract":
            result = firstValue - secondValue;
            break;
        case "multiply":
            result = (firstValue * secondValue);
            break;
        case "divide":
            result = (firstValue / secondValue);
            break;
        default: return;
    }
   userInput = result;
   operator = "";
   firstValue = "";
}
function backspace(){
    if(userInput == "0") return
    userInput = userInput.toString().slice(0,-1);
}
function updateDisplay(){
    if(userInput == "") return;
    userInput = userInput.toString();
    if(userInput.length > 10){
        userInput = userInput.substring(0,10);
    }
    displayScreen.textContent = userInput;
}