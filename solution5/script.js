const celsiusTemps = [0, 20, 37, 100];
const fahrenheitTemps = celsiusTemps.map(temp => (temp * 9/5) + 32);
console.log(fahrenheitTemps); // [32, 68, 98.6, 212]