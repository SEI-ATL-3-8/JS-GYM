
/*
Write a function that takes in a name (first and last separated with a space) and returns an array with the two names separated as well as the first letter of each name capitalized 
example input: "ryan lugtu"
example output: ["Ryan", "Lugtu"]
*/


const separateNames = (string) => {
    let arr = string.split(" ")
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        // console.log('logic', arr[i].toUpperCase())
        // console.log(arr[i][0])
        // console.log(arr[i][0].toUpperCase())
        // console.log(arr[i][0].toUpperCase() + arr[i].slice(1))
        let newName = arr[i][0].toUpperCase() + arr[i].slice(1)
        // console.log(newName)
        console.log(arr[i] + 'vs' + newName)
        arr[i] = newName
    }
    console.log('after loop', arr)
    return arr
  
}
separateNames('ryan lugtu')