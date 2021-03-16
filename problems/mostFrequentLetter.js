/*
Write a function that takes in a string and returns the letter that is used most frequently as well as how frequent it was used

example input: "aaaaaa"
example output: "a, 6"

example input: "bee"
example output: "e, 2"
*/


function mostFrequentLetter(str) {
    let strArr = str.split('')
    // try using an object instead of parallel arrays
    let lettersDone = []
    let lettersTimes = []

    for(let letter of strArr) {
        // if letter has not been done
        if(!lettersDone.includes(letter)) {
            lettersDone.push(letter)
            lettersTimes.push(1)
        } else { // if letter has been done
            lettersTimes[lettersDone.indexOf(letter)] += 1
        }
    }

    // find max num in lettersTimes
    let max = 0
    let maxIndex = 0
    for(let n of lettersTimes){
        if(n > max) {
            max = n
        }
        // console.log(n)
    }

    // select maxIndex and return value from lettersDone and lettersMax
    maxIndex = lettersTimes.indexOf(max)

    return `${lettersDone[maxIndex]}, ${lettersTimes[maxIndex]}`


    console.log(lettersDone, lettersTimes, maxIndex)
}

// console.log(mostFrequentLetter('cinnimon'))
