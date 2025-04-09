const words = ["hello", "dog", "banana", "cat", "grape", "mango"];

const longwords = words.filter(word => word.length >= 5);
console.log(longwords); // Output: ["hello", "banana", "grape", "mango"]