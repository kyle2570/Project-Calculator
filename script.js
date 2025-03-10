

const MAX_DISPLAY_LENGTH = 15;
let number1 = 0, number2 = 0, operator = 0, answer = 0;
let operatorFlag = false; // For starting a new line and disabling delete  if operator is selected. 
let answerFlag = false;  // For disabling delete if answer is shown. 
let hasFirstOperand = false;


const buttons = document.querySelector(".container");
let display = document.querySelector(".display");



buttons.addEventListener("click", (event) => {

    switch (event.target.id) {
        case "one":
            displayDigit(1);
            break;
        case "two":
            displayDigit(2);
            break;
        case "three":
            displayDigit(3);
            break;
        case "four":
            displayDigit(4);
            break;
        case "five":
            displayDigit(5);
            break;
        case "six":
            displayDigit(6);
            break;
        case "seven":
            displayDigit(7);
            break;
        case "eight":
            displayDigit(8);
            break;
        case "nine":
            displayDigit(9);
            break;
        case "zero":
            displayDigit(0);
            break;
        case "dot":
            displayDigit(".");
            break;

        case "del":
            del();
            break;
        case "clear":
            clear();
            break;
        case "x":
            mul();
            break;
        case "divide":
            div();
            break;
        case "plus":
            plus();
            break;
        case "minus":
            minus();
            break;
        case "equal":
            equal();
            break;
    }


});



function clear() {

    display.textContent = "0";

    number1 = 0;
    number2 = 0;
    operator = 0;
    answer = 0;
    answerFlag = false;
    operatorFlag = false;
    hasFirstOperand = false;
    hasSecondOperand = false;
}


function displayDigit(key) {

    if (display.textContent == "MATH ERROR") return;


    if (display.textContent.length < MAX_DISPLAY_LENGTH) {
        if (operatorFlag || answerFlag) {//Starts a new line if operator flag is ON or answer flag is ON.

            if (key == ".") display.textContent = "0" + key;
            else display.textContent = key;

        } else {

            if (display.textContent.includes(".") && key == ".") return; // if "." exists, Prevent "." enters twice. 
            else if (display.textContent == "0" && key == ".") display.textContent += key; // "." after initial 0.
            else if (display.textContent == "0") display.textContent = key; // First digit to replace inital 0. 
            else display.textContent += key;  // Appending digit to exiting number. 
        }
    }

    if (hasFirstOperand) number2 = display.textContent;


    answerFlag = false;
    operatorFlag = false;
}







document.addEventListener("keydown", (event) => {




    switch (event.key) {
        case "1":
            displayDigit(1);
            break;
        case "2":
            displayDigit(2);
            break;
        case "3":
            displayDigit(3);
            break;
        case "4":
            displayDigit(4);
            break;
        case "5":
            displayDigit(5);
            break;
        case "6":
            displayDigit(6);
            break;
        case "7":
            displayDigit(7);
            break;
        case "8":
            displayDigit(8);
            break;
        case "9":
            displayDigit(9);
            break;
        case "0":
            displayDigit(0);
            break;
        case ".":
            displayDigit(".");
            break;

        case "Backspace":
        case "Delete":
            del();
            break;
        case "End":
            clear();
            break;
        case "*":
            mul();
            break;
        case "/":
            div();
            break;
        case "+":
            plus();
            break;
        case "-":
            minus();
            break;
        case "=":
        case "Enter":
            equal();
            break;

    }

});


//Remove focus on buttons
document.addEventListener("keyup", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.blur();
    }
});

document.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.blur();
    }
});




function formatNumber(num) {
    return num >= 1e5 ? num.toExponential(5) : num;
}



function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;

}

function divide(a, b) {
    return a / b;
}

function div() {
    handleOperator("/");
}

function plus() {
    handleOperator("+");
}

function mul() {
    handleOperator("*");
}

function minus() {
    handleOperator("-");
}

function handleOperator(op) {


    if (!operatorFlag && !hasFirstOperand) {
        number1 = display.textContent;
        hasFirstOperand = true;
    } else if (!operatorFlag && !answerFlag) {
        number2 = display.textContent;
        operate(number1, number2, operator);
        number1 = display.textContent;
        number2 = 0;
        hasFirstOperand = true;
    }
    operator = op;
    operatorFlag = true;
    answerFlag = false;

}


function equal() {

    if (display.textContent == "MATH ERROR") return;

    if (!answerFlag && operator != 0) {
        number2 = display.textContent;
        let answer = operate(number1, number2, operator);
        number1 = answer;
        if (answer != 0) answerFlag = true;
        operator = 0;


    }

    operatorFlag = false;

}


function operate(numb1, numb2, operator) {

    let answer = 0;

    numb1 = Number(numb1);
    numb2 = Number(numb2);

    if (!answerFlag) {

        switch (operator) {
            case "*":
                answer = multiply(numb1, numb2);
                break;
            case "/":
                if (numb2 == 0) {

                    display.textContent = "MATH ERROR";
                    return;
                    // firstOperent = 0;
                    // answerFlag = false;
                } else {
                    answer = divide(numb1, numb2);
                    break;
                }
            case "+":
                answer = add(numb1, numb2);
                break;
            case "-":
                answer = subtract(numb1, numb2);
                break;
        }

    }


    display.textContent = Number.isInteger(answer) ? answer : parseFloat(answer.toFixed(MAX_DISPLAY_LENGTH - 3));
    display.textContent = formatNumber(parseFloat(display.textContent));


    return answer;

}


function del() {

    if (!answerFlag && !operatorFlag) {

        if (display.textContent.length == 1) {
            display.textContent = "0";

        } else {
            display.textContent = display.textContent.slice(0, -1);
        }


        if (!hasFirstOperand) number1 = display.textContent;
        else number2 = display.textContent



    }

}