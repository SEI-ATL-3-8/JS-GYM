
/* Write a function that takes in a string and returns that string reversed

example input: "apple"
example output: "elppa"
*/

let strReversal = (str) => {
    let reversedStr = str.split("").reverse().join("")
    console.log(reversedStr)
   return reversedStr
}