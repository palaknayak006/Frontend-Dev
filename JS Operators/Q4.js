// Q4: Array Performance Analyzer

let scores = Array(8).fill(0).map(() => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((a, b) => a + b) / scores.length;
let passed = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);
console.log("Passed:", passed);
