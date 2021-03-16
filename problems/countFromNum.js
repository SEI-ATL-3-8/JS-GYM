/* Write a function that in a number and returns an array of every number from that number to 0 inclusive
example input: 10
example output: [10,9,8,7,6,5,4,3,2,1]
*/

function countFromNum(num) {
    let arr = []
    for(let i = 1; i <= num; i++){
        arr.unshift(i)
    }
    return arr
}

// console.log(countFromNum(5))