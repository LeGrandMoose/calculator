function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

let num1
let num2
let operator

function operate(a,x,b){
    if (x == '*'){
        alert(multiply(a,b))
    }
    else if (x == '+'){
        alert(add(a,b))
    }
    else if (x == '-'){
        alert(subtract(a,b))
    }
    else if (x == '/'){
        alert(divide(a,b))
    }
    else {
        alert('Please input a valid operater ranging from +,-,*,/')
    }
}

operate(10,'*',2)

