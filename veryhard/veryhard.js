function add (x,y) {
    return x+y
}

function subtract (x,y) {
    return x-y
}

function divide (x,y) {
    return x/y
}

function multiply (x,y) {
    return x*y
}

var x;
var y;
var operator;

x = parseInt(prompt("Input your first number"));

operator = prompt("Input an operator ex: / + - *");

y = parseInt(prompt("input your second number"));

if(operator === "+") {
console.log(add(x,y));
}

else if(operator === "-"){
    console.log(subtract(x,y));
}

else if(operator === "/"){
    console.log(divide(x,y));
}

else if(operator === "*"){
    console.log(multiply(x,y));
}