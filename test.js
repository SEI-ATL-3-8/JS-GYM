const expect = chai.expect;
const assert = chai.assert;

//countToNum
describe('countToNum', () => {
    it('Returns an array consisting of numbers from 0 to 5', () => {
        expect(countToNum(5)).to.deep.eq([0,1,2,3,4,5])
    })
    it('Returns an array consisting of numbers from 0 to 10', () => {
        expect(countToNum(10)).to.deep.eq([0,1,2,3,4,5,6,7,8,9,10])
    })
})
 
//countFromNum
describe('countFromNum', () => {
    it('Returns an array consisting of numbers from 5 to 1', () => {
        expect(countFromNum(5)).to.deep.eq([5,4,3,2,1])
    })
    it('Returns an array consisting of numbers from 10 to 1', () => {
        expect(countFromNum(10)).to.deep.eq([10,9,8,7,6,5,4,3,2,1])
    })
})

//fizzBuzz
describe('fizzBuzz', () => {
    it('Returns an array from 0 to 10 where numbers divisible by 3 are replaced by "fizz", numbers divisible by 5 are replaced by "buzz", and numbers divisible by 3 and 5 are replaced by "fizzbuzz"', () => {
        expect(fizzBuzz(10)).to.deep.eq([0, 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz"])
    })
    it('Returns an array from 0 to 20 where numbers divisible by 3 are replaced by "fizz", numbers divisible by 5 are replaced by "buzz", and numbers divisible by 3 and 5 are replaced by "fizzbuzz"', () => {
        expect(fizzBuzz(20)).to.deep.eq([0, 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz"])
    })
})

//stringReversal
describe('stringReversal', () => {
    it('Returns a reversed string', () => {
        expect(stringReversal('apple')).to.eq('elppa')
    })
    it('Returns a reversed string', () => {
        expect(stringReversal('hippopotamus')).to.eq('sumatopoppih')
    })
})

//numberOfVowels
describe('numberOfVowels', () => {
    it('Returns the number 2 for the string "apple"', () => {
        expect(numberOfVowels('apple')).to.eq(2)
    })
    it('Returns the number 1 for the string "dog"', () => {
        expect(numberOfVowels('dog')).to.eq(1)
    })
})

//separateNames
describe('separateNames', () => {
    it('Returns ["Ben", "Bradfield"] from the input of "ben bradfield"', () => {
        expect(separateNames('ben bradfield')).to.deep.eq(['Ben', 'Bradfield'])
    })
    it('Returns ["Rob", "Swanson"] from the input of "rob swanson"', () => {
        expect(separateNames('ben bradfield')).to.deep.eq(['Ben', 'Bradfield'])
    })
})

//mostFrequentLetter
describe('mostFrequentLetter', () => {
    it('Returns the most frequent letter and the count. Ex. "a, 6" from "aaaaaa"', () => {
        expect(mostFrequentLetter('aaaaaa')).to.eq('a, 6')
    })
    it('Returns the most frequent letter and the count. Ex. "n, 3" from "cinnimon"', () => {
        expect(mostFrequentLetter('cinnimon')).to.eq('n, 3')
    })
})

//palindrome
describe('palindrome', () => {
    it('Returns true if the input string is a palindrome', () => {
        expect(palindrome('hannah')).to.equal(true)
    })
    it('Returns false if the input string is not a palindrome', () => {
        expect(palindrome('ben')).to.equal(false)
    })
})

//calculator
describe('calculator', () => {
    it('Returns the number 5', () => {
        expect(calculator('add',2,3)).to.eq(5)
    })
    it('Returns the number 10', () => {
        expect(calculator('multiply',5,2)).to.eq(10)
    })
})

//birthday
describe('birthday', () => {
    it('Returns the string "hi my name is [name] and my birthday is [birthday]" if the person exists in the object', () => {
        expect(birthday('bob')).to.eq('hi my name is bob and my birthday is June 8')
    })
    it('Returns the string "this person does not exist" if the person does not exist in the object', () => {
        expect(birthday('ryan')).to.eq('this person does not exist')
    })
})

//iterateBirthday
// describe('iterateBirthday', () => {
//     it('Returns the string "hi my name is [name] and my birthday is [birthday]" for each person in the object', () => {
//         expect(iterateBirthday(myFriends)).to.eq(//console.logs?)
//     })
// })

//highestAverage
describe('highestAverage', () => {
    it('Returns the string "[name] has the highest average with an average of [averageTestScore]"', () => {
        expect(highestAverage(myFriendsScores)).to.eq("joel has the highest average with an average of 89.25")
    })
})

//addAverageTestScore
describe('addAverageTestScore', () => {
    it('Returns the same object but adds the key "average" with its value of the persons average test score', () => {
        expect(addAverageTestScore(myFriendsScores)).to.deep.eq({"ryan": {
            testScores: [50,100,35,26],
            average: 52.75
        },
        "dex": {
            testScores: [89,81,76,94],
             average: 85
        },
        "joel": {
            testScores: [78,89,99,91],
             average: 89.25
        },
        "pete": {
            testScores: [87,89,99,81],
             average: 89
        }})
    })
})

//sumSquares
describe('sumSquares', () => {
    it('Returns the difference between the sum of squares and the square of the sum of N', () => {
        expect(sumSquares(10)).to.eq(2640)
    })
    it('Returns the difference between the sum of squares and the square of the sum of N', () => {
        expect(sumSquares(2)).to.eq(4)
    })
})

//tournamentWinner
describe('tournamentWinner', () => {
    it('Returns the winning team name', () => {
        expect(tournamentWinner(names, competitions, results)).to.eq('python')
    })
})