function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 !== 0){
        return num1 / num2;
    }
    else {
        return "Error: Divide by 0."
    }
}

function operate(num1, num2, operator){
    if (operator === "+"){
        return add(num1, num2);
    }
    if (operator === "-"){
        return substract(num1, num2);
    }
    if (operator === "*"){
        return multiply(num1, num2);
    }
    if (operator === "/"){
        return divide(num1, num2);
    }
}