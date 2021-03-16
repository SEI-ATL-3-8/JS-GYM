/* 
The sum of the squares of the first 10 natural numbers is
1^2 + 2^2 + 3^2 + 4^2 + 5^2 + .... + 10^2 = 385

The square sum of the first 10- natural numbers is
(1 + 2 + 3 + 4 +....+ 10) ^2 = 55^2 = 3025

Hence the difference between the sum of squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640


Find the difference between the sum of squares of the first one hundred natural numbers and the square of the sum 
*/

function sumSquares(num) {
    let sumSquares = 0
    let squareSum = 0
    let diff = 0
    for(let i = 1; i <= num; i++){
        sumSquares += i * i
        squareSum += i
    }
    squareSum *= squareSum
    diff = squareSum - sumSquares
    return diff
}