"use strict";

/*
Q7 – Smart Calculator

Operations to handle:
add, divide, power, root, subtract

Rules:
• Throw error if dividing by 0
• Throw error if taking root of negative number
• Throw InvalidOperationError for unknown ops
• Wrap everything in try…catch and print a formatted summary
*/

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
    switch (op) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "divide":
            if (b === 0) throw new Error("MathError: Cannot divide by 0");
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) throw new Error("MathError: Cannot take root of negative number");
            return Math.sqrt(a);

        default:
            throw new Error(`InvalidOperationError: '${op}' is not a valid operation`);
    }
}

// Run calculator for each operation
operations.forEach((op) => {
    console.log(`\n=== Operation: ${op} ===`);

    try {
        const result = calculate(op, num1, num2);

        console.log(`Operation: ${op}`);
        console.log(`Input: (${num1}, ${num2})`);
        console.log(`Result: ${result}`);

    } catch (err) {
        console.log(`Error during '${op}': ${err.message}`);
    }
});
