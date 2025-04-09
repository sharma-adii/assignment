const words = ["Hello"," ", "world", "!", " Have", " a", " great", " day."];

const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");

console.log(sentence); // Output: "Hello world! Have a great day."
