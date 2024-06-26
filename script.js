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
        return(multiply(a,b))
    }
    else if (x == '+'){
        return(add(a,b))
    }
    else if (x == '-'){
        return(subtract(a,b))
    }
    else if (x == '/'){
        return(divide(a,b))
    }
    else {
        alert('Please input a valid operater ranging from +,-,*,/')
    }
}

let regularButton = document.querySelectorAll('.regularButton');
let screen = document.querySelector('.display')
let number = ''



regularButton.forEach((button) => {

    button.addEventListener('click', () => {
       let input = button.value

       

       if (isNaN(input)){
        screen.textContent = ''
        if (input == 'CALCULATE'){
            num2 = Number(number)
            screen.textContent = operate(num1,operator,num2)
           }
        else if(input == 'CLEAR'){
            num1 = NaN
            num2 = NaN
            number = ''
           }
        else{
        num1 = Number(number)
        number = ''
        operator = input;
        }
       }

       else {
        let temp = input.toString()
        number +=temp
        screen.textContent = Number(number)
        console.log(number)
       }

    });
});

