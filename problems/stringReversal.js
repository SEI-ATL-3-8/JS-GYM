
/* Write a function that takes in a string and returns that string reversed

example input: "apple"
example output: "elppa"
*/

function stringReversal(str) {
    let newStr = ''
    let arr = str.split('')
    for(let i = arr.length -1; i >= 0; i--) {
        newStr += arr[i]
    }
    return newStr
}

// console.log(stringReversal('apple'))