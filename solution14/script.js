const numbers = [5, 10, 8, 20, 3];

const max = numbers.reduce((accumulator, currentvalue) => {
    return currentvalue > accumulator ? currentvalue : accumulator;
})
console.log(max); // Output: 20