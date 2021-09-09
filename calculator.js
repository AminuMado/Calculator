const displayScreen = document.querySelector(".calc-screen");
const buttonPad = document.querySelector(".calc-buttons-container");
let firstValue = "";
let secondValue = "";
let result = "";
let lastPressed = "";
let operator = "";

document.addEventListener("click", function(event){
    let key = event.target;
    if (key.classList.contains("number")){
        if (key.closest("button")){
            if(displayScreen.textContent.includes(".") && key.textContent == "."){
                return;
            }
            else if(key.textContent == "." && displayScreen.textContent == "0"){
                displayScreen.textContent = displayScreen.textContent + key.textContent;
            }
            else if(key.textContent == "." && lastPressed == "operator"){
                displayScreen.textContent = "0"+ key.textContent;
            }
            else if(displayScreen.textContent == "0" || lastPressed == "operator" || lastPressed == "equality"){
                displayScreen.textContent = key.textContent;
            } 
            else {
                displayScreen.textContent = displayScreen.textContent + key.textContent;
            }
            
        }
        lastPressed = "number";
    }
    else if(key.classList.contains("operator")){
        if(key.id == "add" || key.id == "subtract" || key.id == "multiply" || key.id == "divide"){
            if(firstValue !== ""){
                result = calculate(firstValue,secondValue,operator);
                displayScreen.textContent = result;
            }
            firstValue = displayScreen.textContent;
            operator = key.id;
            /* console.log(document.querySelectorAll(".operator")); */
            /*  if(firstValue  && operator && lastPressed !== "operator"){
                result = calculate(firstValue,secondValue,operator);
                displayScreen.textContent = result;
                console.log("inside")
                firstValue = result;
            }; */
            lastPressed = "operator";
        }
        
        else if (key.id == "equality"){
            lastPressed = key.id;
            secondValue = displayScreen.textContent;
            result = calculate(firstValue,secondValue,operator);
            displayScreen.textContent = result;
            console.log(firstValue)
            console.log(secondValue)
            console.log(operator)
            console.log(result)
        }
        else if (key.id == "refresh"){
            lastPressed = key.id;
             firstValue = "";
             secondValue = "";
             result = "";
             lastPressed = "";
             operator = "";
             displayScreen.textContent = "0";
        }
        else if (key.id == "backspace"){
            lastPressed = key.id;
            displayScreen.textContent.splice(0,-1);
            firstValue = "";
        }
        
    }
    console.log(lastPressed)
})
function calculate(){
    secondValue = displayScreen.textContent;
    if(firstValue == "" || secondValue == "" || operator == ""){
        return;
    }
    else if(operator == "add"){
       return result = parseFloat(firstValue) + parseFloat(secondValue);
    }
    else if(operator == "subtract"){
       return result = parseFloat(firstValue) - parseFloat(secondValue);
    }
    else if(operator == "multiply"){
       return result = parseFloat(firstValue) * parseFloat(secondValue);
    }
    else if(operator == "divide"){
       return result = parseFloat(firstValue) / parseFloat(secondValue);
    }

    console.log(result)
    
}
/* 
let userInput = "";
const numberButtons = document.querySelectorAll(".number");
// functions
let updateScreen = function(output){
    displayScreen.textContent = output;
}
function calculate(operator){
    secondValue = userInput;
    if(firstValue == "" || secondValue== ""){
        return;
    }
    else if(operator == "+"){
        secondValue = userInput;
        result = parseInt(firstValue) + parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }
    else if(operator == "-"){
        secondValue = userInput;
        result = parseInt(firstValue) - parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }
    else if(operator == "x"){
        secondValue = userInput;
        result = parseInt(firstValue) * parseInt(secondValue);
        firstValue = result;
        userInput = "";

    }
    else if(operator == "÷"){
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
    firstValue = "";
    secondValue = "";
    result = "";
    operator = "";
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
/* buttonPad.addEventListener("click",function(event){
    let keyPressed = event.target;
    let keyClass = keyPressed.classList[1];
    let keyId = keyPressed.id;
    console.log(keyPressed)
    if(lastPressed == "add" || lastPressed == "subtract" || lastPressed == "multiply" || lastPressed == "divide"){
        return;
    }
    if (keyClass == "number"){
        userInput += (`${keyPressed.textContent}`);
        updateScreen(userInput);
        lastPressed = "number";
        console.log(`firstValue = ${firstValue}`)
        console.log(`secondvalue= ${secondValue}`)
        console.log(`result = ${result}`)


    };
    if (keyClass == "operator"){
        if(keyId == "add"){
            
            operator = keyPressed.textContent;
            userInput = "";
            lastPressed = "add";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if(keyId == "subtract"){

            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            lastPressed = "subtract";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if(keyId == "multiply"){
            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            lastPressed = "multiply";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if(keyId == "divide"){
            firstValue = userInput;
            operator = keyPressed.textContent;
            userInput = "";
            lastPressed = "divide";
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        };
        if (keyId == "equality"){
            
            updateScreen(calculate(`${operator}`));
            console.log(`firstValue = ${firstValue}`)
            console.log(`secondvalue= ${secondValue}`)
            console.log(`result = ${result}`)

        }
        if (keyId == "refresh"){
            refresh();
        }
    }
})
 */    /*
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
