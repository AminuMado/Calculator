const displayScreen = document.querySelector(".calc-screen");
const buttonPad = document.querySelector(".calc-buttons-container");
const numberButtons = document.querySelectorAll(".number");
let userInput = "";
let firstValue = 0;
let secondValue = 0;
let result = 0;

let operator = "";
// functions
let updateScreen = function(output){
    displayScreen.textContent = output;
}
function equality(operator){
    if(operator == "+"){
        secondValue = userInput;
        result = parseInt(firstValue) + parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }
    if(operator == "-"){
        secondValue = userInput;
        result = parseInt(firstValue) - parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }
    if(operator == "x"){
        secondValue = userInput;
        result = parseInt(firstValue) * parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }
    if(operator == "÷"){
        secondValue = userInput;
        result = parseInt(firstValue) / parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }

    return result;
};
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
/* let calculate = function(firstValue,secondValue,operator){
    switch(operator){
        case "add":
            return result = (firstValue + secondValue);   
        case "subtract":
            return result = (firstValue - secondValue);
        case "multiply":
            return result = (firstValue * secondValue);
        case "divide":
            return result = (firstValue / secondValue);
    }

} */
buttonPad.addEventListener("click",function(event){
    let keyPressed = event.target;
    let keyClass = keyPressed.classList[1];
    let keyId = keyPressed.id;
    console.log(keyPressed)
    if (keyClass == "number"){
        userInput += (`${keyPressed.textContent}`);
        updateScreen(userInput);
        console.log(`firstValue = ${firstValue}`)
        console.log(`secondvalue= ${secondValue}`)
        console.log(`result = ${result}`)


    };
    if (keyClass == "operator"){
        if(keyId == "add"){
            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if(keyId == "subtract"){
            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if(keyId == "multiply"){
            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if(keyId == "divide"){
            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if (keyId == "equality"){
            secondValue = userInput;
            updateScreen(equality(`${operator}`));
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        }
        if (keyId == "refresh"){
            refresh();
        }
    }
})
    /*
    switch(keyClass){
        case "number":
           
            break
        case "operator":
            switch(keyId){
                 case "add":
                    firstValue = userInput;
                    userInput = ""; 
                    break
                case "equality":
                   let answer = equality();
                   updateScreen(answer);
                    console.log(result);
                    console.log(firstValue);
                    console.log(secondValue);
                    break
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
                case "backspace": 
                case "refresh":
                    refresh();
            }

    }

//This checks if a number is pressed.&& displayScreen.textContent.length <= 9
        
})
}*/