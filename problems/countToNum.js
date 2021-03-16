/* Write a function that in a number and returns an array of every number from 0 to that number inclusive
example input: 10
example output: [0,1,2,3,4,5,6,7,8,9,10]
*/

//WRITE YOUR CODE HERE

function countToNum(num) {
    let arr = []
    for(let i = 0; i <= num; i++){
        arr.push(i)
    }
    return arr
}
