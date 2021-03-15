/*Write a function that takes in a string and returns the number of vowels in the string 

example input: "apple"
example output: "2"
*/

const numVowels = (str) => {
    let vowels = 'aeiou'
    let totalVowels = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])) {
            totalVowels++
        }
    }
    return totalVowels
}
console.log(numVowels('apple'))