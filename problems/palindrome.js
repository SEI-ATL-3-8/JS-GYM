/* 
Write a function that takes in a string and returns true if the string is a palindrome (spelled the same forward and backwards) otherwise return false 

example : "abba" returns true
example: "aabcdea" returns false 
*/

let palindrome = (str) => {
    let reversedStr = str.split("").reverse().join("")
    console.log(reversedStr)
    if(str === reversedStr) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('apple'))