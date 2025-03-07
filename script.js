


const MAX_DISPLAY_LENGTH = 15;
let number1 = 0, number2 = 0, currentNumber = 0, operator = 0, answer = 0;
let operatorFlag = false; // For starting a new line if operator is pressed for first time. 
let answerFlag = false;  // For disabling delete if answer is shown by operate function. 
let hasFirstOperand = false;




const buttons = document.querySelector(".container");
let display = document.querySelector(".display");

//Tests
let test1 = document.querySelector("#test1");
let test2 = document.querySelector("#test2");
let test3 = document.querySelector("#test3");
let test4 = document.querySelector("#test4");
let test5 = document.querySelector("#test5");
let test6 = document.querySelector("#test6");
let test7 = document.querySelector("#test7");



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
        case "ac":
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


    //Tests
    test1.textContent = number1;
    test2.textContent = number2;
    test3.textContent = operator;
    test4.textContent = currentNumber;
    test5.textContent = operatorFlag;
    test6.textContent = hasFirstOperand;
    test7.textContent = answerFlag;

});

function displayResult() {
    let answer = operate(number1, number2, operator);

    display.textContent = Number.isInteger(answer) ? answer : parseFloat(answer.toFixed(MAX_DISPLAY_LENGTH));
    display.textContent = formatNumber(parseFloat(display.textContent));
    answerFlag = true;

}





function clear() {

    display.textContent = "0";

    number1 = 0;
    number2 = 0;
    currentNumber = 0;
    operator = 0;
    answer = 0;
    answerFlag = false;
    operatorFlag = false;
    hasFirstOperand = false;
    hasSecondOperand = false;


}

function del() {

    if (!answerFlag) {

        if (display.textContent.length == 1) {
            display.textContent = "0";

        } else {
            display.textContent = display.textContent.slice(0, -1);
        }

        //} else if (display.textContent == "0" || operatorFlag == true) {
        //     display.textContent = key;

        //     operatorFlag = false;
    }

}




function displayDigit(key) {


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

    currentNumber = display.textContent;
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


function operate(numb1, numb2, operator) {

    let answer = 0;

    numb1 = Number(numb1);
    numb2 = Number(numb2);

    if (!answerFlag) {

        switch (operator) {
            case "x":
                answer = multiply(numb1, numb2);
                break;
            case "divide":
                answer = divide(numb1, numb2);
                break;
            case "plus":
                answer = add(numb1, numb2);
                break;
            case "minus":
                answer = subtract(numb1, numb2);
                break;
        }

    }


    display.textContent = Number.isInteger(answer) ? answer : parseFloat(answer.toFixed(MAX_DISPLAY_LENGTH));
    display.textContent = formatNumber(parseFloat(display.textContent));
    currentNumber = display.textContent;

    return answer;

}


function formatNumber(num) {
    return num >= 1e10 ? num.toExponential(10) : num;
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
    handleOperator("divide");
}

function plus() {
    handleOperator("plus");
}

function mul() {
    handleOperator("x");
}

function minus() {
    handleOperator("minus");
}

function handleOperator(op) {

    operator = op;

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

    operatorFlag = true;
    answerFlag = false;

}


function equal() {

    if (!answerFlag && operator != 0) {
        let answer = operate(number1, currentNumber, operator);
        number1 = answer;
        if (answer != 0) answerFlag = true;
        operator = 0;


    }

    operatorFlag = false;

}

