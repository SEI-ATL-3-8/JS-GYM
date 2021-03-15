const expect = chai.expect;
const assert = chai.assert;

// countToNum
describe('countToNum', () => {
    it('Returns an array consisting of numbers from 0 to 5', () => {
        expect(countToNum(5)).to.deep.eq([0,1,2,3,4,5])
    })
    it('Returns an array consisting of numbers from 0 to 10', () => {
        expect(countToNum(10)).to.deep.eq([0,1,2,3,4,5,6,7,8,9,10])
    })
})
 
// countToNum 
describe('countFromNum', () => {
    it('Returns an array consisting of numbers from 5 to 0', () => {
        expect(countFromNum(5)).to.deep.eq([5,4,3,2,1,0])
    })
})
//fizzBuzz
describe('fizzBuzz', () => {
    it('Returns an array consisting of numbers between 0 and the input number. If the number % 3 === 0 then add "fizz" instead, if the number % 5 === 0 add "buzz" instead, if the number is divisible by both 3 and 5 add "fizzbuzz" to the array instead', () => {
        expect(fizzBuzz(20)).to.deep.eq([
            'fizzbuzz', 1,      2,
            'fizz',     4,      'buzz',
            'fizz',     7,      8,
            'fizz',     'buzz', 11,
            'fizz',     13,     14,
            'fizzbuzz', 16,     17,
            'fizz',     19,     'buzz'
          ])
    })
})

//stringReversal
describe('stringReversal', () => {
    it('returns the input string reversed', () => {
        expect(strReversal('apple')).to.deep.eq('elppa')
    })
    
})

//number of vowels
describe('numberOfVowels', () => {
    it('returns the most common letter and amount of the input string', () => {
        expect(numVowels('apple')).to.deep.eq(2)
    })
})

//separateNames
describe('separateNames', () => {
    it('Returns an array consisting of the input string separated by a space and the first letter capitalized', () => {
        expect(separateNames('ryan lugtu')).to.deep.eq(['Ryan', 'Lugtu'])
    })
})

//most frequent letter
describe('mostFrequentLetter', () => {
    it('returns the most common letter and amount of the input string', () => {
        expect(findFrequentLetter('bee')).to.deep.eq("e, 2")
    })
})



// palindrome
describe('palindrome', () => {
    it('returns true if the input str is a palindrome', () => {
        expect(palindrome('bob')).to.deep.eq(true)
    })
    it('returns false if the input str is not a palindrome', () => {
        expect(palindrome('bobby')).to.deep.eq(false)
    })
})


// Calculator
describe('calculator', () => {
    it('takes in actions and applies math based on whatever action is inputted')
    it('if action is the string add, output num1 + num2', () => {
        expect(calculator('add',1,2)).to.deep.eq(3)
    })
    it('if action is the string subtract, output num1 - num2', () => {
        expect(calculator('subtract',2,1)).to.deep.eq(1)
    })
    it('if action is the string multiply, output num1 * num2', () => {
        expect(calculator('multiply',2,2)).to.deep.eq(4)
    })
    it('if action is the string divide, output num1 * num2', () => {
        expect(calculator('divide',9,3)).to.deep.eq(3)
    })
})

//birthday
describe('birthday', () => {
    it('if the name exists within the myFriends object, return the name and birthday of that person', () => {
        expect(birthdayGreet('bob')).to.deep.eq('Hi my name is bob and my birthday is June 8')
    })
    it('if the name does not exist within the myFriends object, return that the person does not exist  ', () => {
        expect(birthdayGreet('ryan')).to.deep.eq('this person does not exist')
    })
})


// iterateBirthdays
describe('iterateBirthdays', () => {
    it('returns an array with the string "hi my name is [name] and my birthday is [birthday]"', () => {
        expect(iterateBirthdays(myFriendsBirthdays)).to.deep.eq([
            'hi my bob is and my birthday is June 8',
            'hi my paul is and my birthday is December 3',
            'hi my george is and my birthday is August 16'
          ])
    })
})

// highestAverage
describe('highestAverage', () => {
    it('returns the person with the highest average score', () => {
        expect(findHighestAverage(myFriendsScores1)).to.deep.eq("joel has the highest average with an average of 89.25")
    })
})


// addAverage 
describe('addAverageTestScore', () => {
    it('adds a key containing the average test scores per person', () => {
        expect(createAverages(myFriendsScores)).to.deep.eq(
            {
                ryan: { testScores: [ 50, 100, 35, 26 ], average: 52.75 },
                dex: { testScores: [ 89, 81, 76, 94 ], average: 85 },
                joel: { testScores: [ 78, 89, 99, 91 ], average: 89.25 },
                pete: { testScores: [ 87, 89, 99, 81 ], average: 89 }
              }
        )
    })
})