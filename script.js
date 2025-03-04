

const buttons = document.querySelector(".container");

buttons.addEventListener("click", (event) => {

    switch (event.target.id) {
        case "one":
            console.log("1 was clicked");
            break;
        case "two":
            console.log("2 was clicked");
            break;
        case "three":
            console.log("3 was clicked");
            break;
        case "four":
            console.log("4 was clicked");
            break;
        case "five":
            console.log("5 was clicked");
            break;
        case "six":
            console.log("6 was clicked");
            break;
        case "seven":
            console.log("7 was clicked");
            break;
        case "eight":
            console.log("8 was clicked");
            break;
        case "nine":
            console.log("9 was clicked");
            break;
        case "zero":
            console.log("0 was clicked");
            break;
        case "dot":
            console.log("dot was clicked");
            break;


        case "del":
            console.log("DEL was clicked");
            break;
        case "ac":
            console.log("AC was clicked");
            break;
        case "x":
            console.log("X was clicked");
            break;
        case "divide":
            console.log("/  was clicked");
            break;
        case "plus":
            console.log("+  was clicked");
            break;
        case "minus":
            console.log("--- was clicked");
            break;
        case "equal":
            console.log("=  was clicked");
            break;

    }

});




function operate(a, b) {
    return a + b;
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