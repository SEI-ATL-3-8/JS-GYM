/* Given this object, write a function that takes in a name and returns the string "hi my name is [name] and my birthday is [birthday]".
If the name does not exist then return a string "this person does not exist "
ex input : myBirthdayFunc("bob")
ex output : "hi my name is bob and my birthday is June 8"

ex input: "myBirthdayFunc("ryan")
ex output: this person does not exist 
*/
let myFriends = {
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

let birthdayGreet = (name) => {
    if(myFriends[name]) {
        console.log(`Hi my name is ${name} and my birthday is ${myFriends[name].birthday}`)
        return (`Hi my name is ${name} and my birthday is ${myFriends[name].birthday}`)
    } else {
        console.log('this person does not exist')
        return ('this person does not exist')
    }
}

birthdayGreet('ryan')
birthdayGreet('bob')