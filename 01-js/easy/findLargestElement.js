/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestElement=numbers[0];
    numbers.forEach(el=>{
        if(el>largestElement){
            largestElement=el;
        }
    })
    return largestElement;
}
module.exports = findLargestElement;