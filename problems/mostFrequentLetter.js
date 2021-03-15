/*
Write a function that takes in a string and returns the letter that is used most frequently as well as how frequent it was used

example input: "aaaaaa"
example output: "a, 6"

example input: "bee"
example output: "e, 2"
*/

let findFrequentLetter = (word) => {
    let hash = {}
    for(let i = 0; i < word.length; i++) {
        // console.log(word[i]) // letter
        // if the letter does not exist in the hash create it and set it to 1
        if(!hash[word[i]]) {
            hash[word[i]] = 1 
        } // if the letter does exist and you see it again then add 1
        else {
            hash[word[i]]++
        }
    }
    let highest = 0
    let mostFrequentLetter = ''
    for(let score in hash) {
        // console.log('letter',score)
        // console.log('score',hash[score])

        if(hash[score] > highest) {
            highest = hash[score]
            mostFrequentLetter = score
        }
    }
    console.log(highest, mostFrequentLetter)
    return `${mostFrequentLetter}, ${highest}`
}

findFrequentLetter('bee')