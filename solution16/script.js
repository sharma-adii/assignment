const words = ["Aditya", "Vansh", "Ayush", "Rohit"];

const totalChars = words.reduce((acc, word) => acc + word.length, 0);

console.log(totalChars);
