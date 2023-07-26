/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
*/


function findMostFrequentElement(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    arr.forEach(element => {
        frequency[element] = (frequency[element] || 0) + 1;

        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostFrequentElement = element;
        }
    });

    return mostFrequentElement;
}

const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMostFrequentElement(input);
console.log(output);
