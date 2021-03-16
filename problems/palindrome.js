/* 
Write a function that takes in a string and returns true if the string is a palindrome (spelled the same forward and backwards) otherwise return false 

example : "abba" returns true
example: "aabcdea" returns false 
*/

function palindrome(str) {
    let forwardStr = str
    let backwardStr = ''
    let strArr = str.split('')
    let backwardArr = []

    for(let l of strArr) {
        backwardArr.unshift(l)
    }
    backwardStr = backwardArr.join('')

    if(forwardStr === backwardStr){
        return true
    } else {
        return false
    }
}

// console.log(palindrome('hannah'))