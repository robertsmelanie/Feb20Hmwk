// Sort an Array Alphabetically using the sort Method

const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

const fruits = ['banana', 'Apple', 'cherry'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // Output: ['Apple', 'banana', 'cherry']
