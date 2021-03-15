/* Write a function that in a number and returns an array of every number from that number to 0 inclusive
example input: 10
example output: [10,9,8,7,6,5,4,3,2,1]
*/

const countFromNum = (num) => {
    let arr = []
    for(let i = num; i >= 0; i--) {
        arr.push(i)
    }
    return arr
}