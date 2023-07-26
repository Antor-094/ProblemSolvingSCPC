/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
Example Input: [2, -5, 10, -3, 7] Example Output: 19
 */


function findThePositiveSum(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i]
        }
    }
    return sum
}


let input = [2, -5, 10, -3, 7]

let output = findThePositiveSum(input)
console.log(output)