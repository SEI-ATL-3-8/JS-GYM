/* Given this object, write a function that iterates through the object and logs  "hi my name is [name] and my birthday is [birthday]".

myFriends = {
    "bob": {
        age: 24,
        birthday: "June 8"
    },
    "paul": {
        age: 35,
        birthday: "December 3"
    },
    "george": {
        age: 28,
        birthday: "August 16"
    }
}
*/

let myFriendsBirthdays = {
    "bob": {
        age: 24,
        birthday: "June 8"
    },
    "paul": {
        age: 35,
        birthday: "December 3"
    },
    "george": {
        age: 28,
        birthday: "August 16"
    }
}

let iterateBirthdays = (obj) => {
    let arr = []
    for(let person in obj) {
        arr.push(`hi my ${person} is and my birthday is ${obj[person].birthday}`)
    }
    return arr
}
console.log(iterateBirthdays(myFriendsBirthdays))