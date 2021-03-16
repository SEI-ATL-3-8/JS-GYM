/* Given this object, write a function that iterates through the object and logs  "hi my name is [name] and my birthday is [birthday]" for each person.

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

let myFriendsBDays = {
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

function iterateBirthday(obj) {
    for(let friend in obj) {
        console.log(`hi my name is ${friend} and my birthday is ${obj[friend]['birthday']}`)
    }
}

// console.log(iterateBirthday(myFriendsBDays))