/*
Write a single function that takes in 3 parameters:
1. a string of either add, multiply, subtract, or divide 
2. a number
3. a number 
and fulfill the proper output based on the action parameter given

ex. calculator("add", 1, 2) 
output: 3

calculator("subtract", 3, 1) 
output: 2

calculator("multiple", 3, 3) 
output: 6

calculator("divide", 15, 5) 
output: 3

if the action parameter is not filled return "action needed!"
*/

function calculator(str, num1, num2) {
    if(str === 'add') {
        return num1 + num2
    } else if(str === 'subtract') {
        return num1 - num2
    } else if(str === 'multiply') {
        return num1 * num2
    } else if(str === 'divide') {
        return num1 / num2
    }
}

// console.log(calculator('add', 2, 3))