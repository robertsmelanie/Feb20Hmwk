// Return a Sorted Array Without Changing the Original Array

const numbers = [3, 1, 4, 1, 5];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(numbers); // Output: [3, 1, 4, 1, 5]
console.log(sortedNumbers); // Output: [1, 1, 3, 4, 5]
