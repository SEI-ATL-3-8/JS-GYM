
/* Given this object 
Write a function that returns the person with the highest average test score 

output "joel has the highest average with an average of 85.25"
*/
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

function highestAverage(obj) {
    let highestAverage = 0
    let highestPerson = ''
    for(let person in obj) {
        let currentAverage = 0
        for(let score of obj[person].testScores) {
            currentAverage += score
        }
        currentAverage /= obj[person].testScores.length
        if(currentAverage > highestAverage) {
            highestAverage = currentAverage
            highestPerson = person
        }
    }
    return `${highestPerson} has the highest average with an average of ${highestAverage}`
}

// console.log(highestAverage(myFriendsScores))