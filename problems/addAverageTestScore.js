/* Given this object 
Write a function that returns the same object but adds the key "average" with its value of the persons average test score 

myFriendsScores = {
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
output: 
{
    "ryan": {
        testScores: [50,100,35,26],
        average: 48.75
    },
    "dex": {
        testScores: [89,81,76,94],
         average: 81
    },
    "joel": {
        testScores: [78,89,99,91],
         average: 85.25
    },
    "pete": {
        testScores: [87,89,99,81],
         average: 85
    }
*/

let myFriendsScores = {
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

let createAverages = (object) => {
    for(let person in object) {
        // console.log(object[person])
        let scores = object[person].testScores
        let totalScore = 0
        for(let i = 0; i < scores.length; i++) {
            totalScore += scores[i]
        }
        totalScore = totalScore/scores.length
        object[person].average = totalScore
    }
    console.log(object)
    return object
}

createAverages(myFriendsScores)