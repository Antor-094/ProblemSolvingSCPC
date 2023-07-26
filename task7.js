/*  Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
 */


function findSecondSmallest(arr) {
    if (arr.length < 2) {
      console.log('Array should have at least two elements');
      return;
    }
  
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray[1];
  }
  

  const inputArray = [5, 2, 8, 1, 9, 4];
  const secondSmallest = findSecondSmallest(inputArray);
  console.log(secondSmallest);
  