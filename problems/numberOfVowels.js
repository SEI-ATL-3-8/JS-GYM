/*Write a function that takes in a string and returns the number of vowels in the string 

example input: "apple"
example output: "2"
*/
const vowels = ['a','e','i','o','u']

function numberOfVowels(str) {
    let numVowels = 0
    let strArr = str.split('')

    for(let letter of strArr) {
        for(let v of vowels){
            // console.log(v)
            if(letter === v){
                numVowels++
            }
        }
    }
    return numVowels
}

// console.log(numberOfVowels('apple'))