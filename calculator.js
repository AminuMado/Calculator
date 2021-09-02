const displayScreen = document.querySelector(".calc-screen");
const buttonPad = document.querySelector(".calc-buttons-container");
const numberButtons = document.querySelectorAll(".number");
let userInput = "";
let firstValue = "";
let secondValue = "";
let result = "";
let operator = "";
// functions
let updateScreen = function(output){
    displayScreen.textContent = output;
}
let resetScreen = function(){
    displayScreen.textContent = 0;
}
let refresh = function(){
    displayScreen.textContent = 0;
    userInput = "";
    firstValue = 0;
    secondValue = 0;
    result = 0;
    operator = 0;
}
buttonPad.addEventListener("click",function(event){
    let keyPressed = event.target;
    let keyClass = keyPressed.classList[1];
    let keyId = keyPressed.id;
    console.log(keyPressed)
    switch(keyClass){
        case "number":
            userInput += (`${keyPressed.textContent}`);
            updateScreen(userInput);
            break
        case "operator":
            switch(keyId){
           /*      case "add":
                    firstValue = userInput;
                    userInput = "";
                    //need to figure out how to make the operator glow or show that its active;
                case "subtract":
                    firstValue = userInput;
                    userInput = "";
                    //need to figure out how to make the operator glow or show that its active;
                case "multiply":
                    firstValue = userInput;
                    userInput = "";
                    //need to figure out how to make the operator glow or show that its active;
                case "divide":
                    firstValue = userInput;
                    userInput = "";
                    //need to figure out how to make the operator glow or show that its active;
                case "backspace": */
                case "refresh":
                    refresh();
            }

    }

//This checks if a number is pressed.&& displayScreen.textContent.length <= 9
        
})
