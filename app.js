const display = document.getElementById("display");

// One to !0

const buttonZero = document.getElementById("buttonZero");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree= document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");
const buttonSix = document.getElementById("buttonSix");
const buttonSeven = document.getElementById("buttonSeven");
const buttonEight = document.getElementById("buttonEight");
const buttonNine = document.getElementById("buttonNine");

buttonZero.addEventListener("click", zero)

function zero() {
    display.innerText += "0";
}

buttonOne.addEventListener("click", one)

function one() {
    display.innerText += "1";
}

buttonTwo.addEventListener("click", two)

function two() {
    display.innerText += "2";
}

buttonThree.addEventListener("click", three)

function three() {
    display.innerText += "3";
}

buttonFour.addEventListener("click", four)

function four() {
    display.innerText += "4";
}

buttonFive.addEventListener("click", five)

function five() {
    display.innerText += "5";
}

buttonSix.addEventListener("click", six)

function six() {
    display.innerText += "6";
}

buttonSeven.addEventListener("click", seven)

function seven() {
    display.innerText += "7";
}

buttonEight.addEventListener("click", eight)

function eight() {
    display.innerText += "8";
}

buttonNine.addEventListener("click", nine)

function nine() {
    display.innerText += "9";
}

// Operators

const buttonDivide = document.getElementById("buttonDivide");
const buttonMinus = document.getElementById("buttonMinus");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonPlus = document.getElementById("buttonPlus");
const buttonRoundOff = document.getElementById("buttonCancelAll");
const buttonCancel = document.getElementById("buttonCancel");
const buttonEqual = document.getElementById("buttonEqual");
const buttonPercent = document.getElementById("buttonPercent");
const buttonNegative = document.getElementById("buttonNegative");
const buttonDot = document.getElementById("buttonDot");

buttonDivide.addEventListener("click", divide)

function divide() {
    display.innerText += "/";
}

buttonMinus.addEventListener("click", minus)

function minus() {
    display.innerText += "-";
}

buttonMultiply.addEventListener("click", multiply)

function multiply() {
    display.innerText += "*";
}

buttonPlus.addEventListener("click", plus)

function plus() {
    display.innerText += "+";
}


// How to remove the last number with Js

buttonRoundOff.addEventListener("click", round)

function round() {
    
}

// How to remove the last number with Js




buttonCancel.addEventListener("click", cancel)

function cancel() {
    display.innerText = " ";
}

//How to make a working equal operator

buttonEqual.addEventListener("click", equal)

function equal() {
    display.innerText = eval();
}

//How to make a working equal operator




buttonPercent.addEventListener("click", percent)

function percent() {
    display.innerText += "/100";
}


buttonNegative.addEventListener("click", negative)

function negative() {
    display.innerText += "-";
}

buttonDot.addEventListener("click", dot)

function dot() {
    display.innerText += ".";
}


// Add math.round function


//Add a history function