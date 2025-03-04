


const MAX_DISPLAY_LENGTH = 15;
let currentDisplayLength = 0;
let number1, number2, operator;



const buttons = document.querySelector(".container");

buttons.addEventListener("click", (event) => {

    switch (event.target.id) {
        case "one":
            display(1);
            break;
        case "two":
            display(2);
            break;
        case "three":
            display(3);
            break;
        case "four":
            display(4);
            break;
        case "five":
            display(5);
            break;
        case "six":
            display(6);
            break;
        case "seven":
            display(7);
            break;
        case "eight":
            display(8);
            break;
        case "nine":
            display(9);
            break;
        case "zero":
            display(0);
            break;
        case "dot":
            display(".");
            break;


        case "del":
            del();
            break;
        case "ac":
            clear();
            break;
        case "x":
            break;
        case "divide":
            break;
        case "plus":
            display("+");
            break;
        case "minus":
            break;
        case "equal":
            break;

    }

});

function clear() {
    let display = document.querySelector(".display");
    display.textContent = "0";
    currentDisplayLength = 0;
}

function del() {
    let display = document.querySelector(".display");

    if (display.textContent.length == 1) {
        display.textContent = "0";
        currentDisplayLength = 0;


    } else {
        display.textContent = display.textContent.slice(0, -1);
        currentDisplayLength--;


    }
}



function display(key) {
    let display = document.querySelector(".display");

    if (currentDisplayLength < MAX_DISPLAY_LENGTH) {
        if (display.textContent == "0") {
            display.textContent = key;
            currentDisplayLength++;
        } else {
            display.textContent += key;
            currentDisplayLength++;
        }
    }

}



let display1 = document.querySelector(".display1");
let keyPressed = document.querySelector("body");

keyPressed.addEventListener("keydown", (event) => {
    if (event.key == " ") {
        display1.textContent = "You pressed SPACE."
    } else { display1.textContent = `You pressed ${event.key.toUpperCase()}.` }
});



function operate(number1, number2, operator) {

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