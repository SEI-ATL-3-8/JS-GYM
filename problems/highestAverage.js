
/* Given this object 
Write a function that returns the person with the highest average test score 

myFriendsScores1 = {
    "ryan": {
        testScores: [50,100,35,26]
    },
    "dex": {
        testScores: [89,81,76,94]
    },
    "joel": {
        testScores: [78,89,99,91]
    },
    "pete": {
        testScores: [87,89,99,81]
    }
}
output "joel has the highest average with an average of 85.25"
*/

let myFriendsScores1 = {
    "ryan": {
        testScores: [50,100,35,26]
    },
    "dex": {
        testScores: [89,81,76,94]
    },
    "joel": {
        testScores: [78,89,99,91]
    },
    "pete": {
        testScores: [87,89,99,81]
    }
}

const findHighestAverage = (obj) => {
    let highest = 0
    let topScorer = ''
    for(let persons in obj) {
        // console.log(obj[persons].testScores)
        let allScores = obj[persons].testScores
        let sum = 0
        for(let i = 0; i < allScores.length; i++) {
            sum += allScores[i]
        }
        let average = sum/allScores.length 
        if(average > highest) {
            highest = average
            topScorer = persons
        }
    }
    console.log(highest, topScorer)
    return `${topScorer} has the highest average with an average of ${highest}`
}
console.log(findHighestAverage(myFriendsScores1))

