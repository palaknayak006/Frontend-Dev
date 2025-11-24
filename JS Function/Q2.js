// Q2: applyOperation(numbers, operation)
// This function applies a callback function to each element of the array

function applyOperation(numbers, operation) {
    let result = [];

    for (let num of numbers) {
        result.push(operation(num)); // callback execution
    }

    return result;
}

// Callback functions
const double = num => num * 2;
const square = num => num * num; // correct square function

// Input array
const numbers = [1, 2, 3, 4];

// Applying callback operations
const doubled = applyOperation(numbers, double);
const squared = applyOperation(numbers, square);

// Display on webpage (if DOM exists)
document.getElementById("result").innerHTML = `
    <b>Original:</b> ${numbers}<br>
    <b>Doubled:</b> ${doubled}<br>
    <b>Squared:</b> ${squared}
`;

// Console output (for testing)
console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
