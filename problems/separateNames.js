
/*
Write a function that takes in a name (first and last separated with a space) and returns an array with the two names separated as well as the first letter of each name capitalized 
example input: "ryan lugtu"
example output: ["Ryan", "Lugtu"]
*/

function separateNames(fullName) {
    let nameArr = []
    let arr = fullName.split(' ')
    let firstArr = arr[0].split('')
    let lastArr = arr[1].split('')
    // console.log(arr, firstArr, lastArr)

    let firstCap = firstArr[0].toUpperCase()
    firstArr[0] = firstCap
    let lastCap = lastArr[0].toUpperCase()
    lastArr[0] = lastCap
    // console.log(firstArr, lastArr)

    let newFirst = firstArr.join('')
    let newLast = lastArr.join('')
    nameArr[0] = newFirst
    nameArr[1] = newLast

    return nameArr
}

// console.log(separateNames('ben bradfield'))