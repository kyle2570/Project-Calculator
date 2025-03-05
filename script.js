


const MAX_DISPLAY_LENGTH = 12;
let currentDisplayLength = 0;
let number1 = 0, number2 = 0, operator;
let operatorFlag = false;
let answerFlag = false;



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
        case "ac":
            clear();
            break;
        case "x":
            operator = "x";
            operatorFlag = true;

            if (number1 == 0) number1 = parseFloat(display.textContent);
            else number2 = parseFloat(display.textContent);

            if (number1 != 0 && number2 != 0) {
                displayResult();
                number1 = parseFloat(display.textContent);
            }
            break;


        /* old code
            operator = "x";
            operatorFlag = true;
            if (number1 == 0) number1 = parseFloat(display.textContent);
            else number2 = parseFloat(display.textContent);
     
            if (!answerFlag && (number1 != 0 && number2 != 0)) {
                displayResult();
                number1 = parseFloat(display.textContent);
            }
    */


        case "divide":
            operator = "divide";
            operatorFlag = true;
            if (number1 == 0) number1 = parseFloat(display.textContent);
            else number2 = parseFloat(display.textContent);

            if (!answerFlag && (number1 != 0 && number2 != 0)) {
                displayResult();
                number1 = parseFloat(display.textContent);
            }


            break;
        case "plus":
            operator = "plus";
            operatorFlag = true;
            if (number1 == 0) number1 = parseFloat(display.textContent);
            else number2 = parseFloat(display.textContent);

            if (!answerFlag && (number1 != 0 && number2 != 0)) {
                displayResult();
                number1 = parseFloat(display.textContent);
            }


            break;
        case "minus":
            operator = "minus";
            operatorFlag = true;
            if (number1 == 0) number1 = parseFloat(display.textContent);
            else number2 = parseFloat(display.textContent);

            if (!answerFlag && (number1 != 0 && number2 != 0)) {
                displayResult();
                number1 = parseFloat(display.textContent);
            }

            break;

        case "equal":
            number2 = parseFloat(display.textContent);
            operatorFlag = false;

            if (!answerFlag && (number1 != 0 && number2 != 0)) displayResult();

            answerFlag = true;

            break;

    }

});

function displayResult() {
    let answer = operate(number1, number2, operator);

    display.textContent = Number.isInteger(answer) ? answer : parseFloat(answer.toFixed(MAX_DISPLAY_LENGTH));
    display.textContent = formatNumber(parseFloat(display.textContent));
    answerFlag = true;

}

function formatNumber(num) {
    return num >= 1e10 ? num.toExponential(10) : num;
}


function clear() {

    display.textContent = "0";
    currentDisplayLength = 0;
    number1 = 0;
    number2 = 0;
    answerFlag = false;
    operatorFlag = false;

}

function del() {

    if (!answerFlag) {

        if (display.textContent.length == 1) {
            display.textContent = "0";
            currentDisplayLength = 0;

        } else {
            display.textContent = display.textContent.slice(0, -1);
            currentDisplayLength--;


        }

    }
}



function displayDigit(key) {



    if (display.textContent.includes(".") && key == ".") return;


    if (currentDisplayLength < MAX_DISPLAY_LENGTH) {


        if (display.textContent == "0" && key == ".") {
            display.textContent += key;
            currentDisplayLength++;
        } else if (display.textContent == "0" || operatorFlag == true) {
            display.textContent = key;
            currentDisplayLength++;
            operatorFlag = false;
        } else {
            display.textContent += key;
            currentDisplayLength++;
        }
    }


    answerFlag = false;
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
            operator = "x";
            operatorFlag = true;
            number1 = parseFloat(display.textContent);
            break;
        case "/":
            operator = "divide";
            operatorFlag = true;
            number1 = parseFloat(display.textContent);
            break;
        case "+":
            operator = "plus";
            operatorFlag = true;
            number1 = parseFloat(display.textContent);
            break;
        case "-":
            operator = "minus";
            operatorFlag = true;
            number1 = parseFloat(display.textContent);
            break;

        case "=":
        case "Enter":
            console.log(event.key);
            number2 = parseFloat(display.textContent);
            operatorFlag = false;
            if (!answerFlag && (number1 != 0 && number2 != 0)) displayResult();
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
    switch (operator) {
        case "x":
            return multiply(numb1, numb2);
            break;
        case "divide":
            return divide(numb1, numb2);
            break;
        case "plus":
            return add(numb1, numb2);
            break;
        case "minus":
            return subtract(numb1, numb2);
            break;
    }
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