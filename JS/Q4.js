// Q4. Academic Performance Evaluator

let marks = [88, 92, 75, 80, 90]; // 5 subjects

// Check if any subject is < 35
let failedSubject = marks.some(m => m < 35);

// Calculate percentage
let total = marks.reduce((sum, m) => sum + m, 0);
let percentage = (total / 500) * 100;

if (failedSubject) {
    console.log("Detained (A subject is below 35)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log(`Percentage: ${percentage.toFixed(2)}%`);
