/* Write a function that in a number and returns an array of every number from 0 to that number inclusive EXCEPT for when that number fulfills one of these cases
case 1: if the number is divisible by both 3 and 5 then that number should be replaced with "fizzbuzz"
case 2: if the number is divisible by just 3 then that number should be replaced with "fizz"
case 3: if the number is divisible by just 5 then that number should be replaced with "buzz"

example input: 20
example output: [0,1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,12,13,14,"fizzbuzz",16,17,18,19,"buzz"]
*/

const fizzBuzz = (num) => {
    let arr = []
    for(let i = 0; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzbuzz')
        } else if (i % 3 === 0) {
            arr.push('fizz')
        } else if (i % 5 === 0) {
            arr.push('buzz')
        } else {
            arr.push(i)
        }
    }
    return arr
}

console.log(fizzBuzz(20))