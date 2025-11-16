// Q2. Multi-Type Data Summary

let name = "Palak";          // string
let age = 21;                // number
let isStudent = true;        // boolean
let scores = [85, 90, 95];   // array
let details = { city: "Indore", course: "Web Dev" }; // object
let emptyValue = null;       // null
let unknownValue;            // undefined

// Create summary object
let summary = {
    name: { value: name, type: typeof name },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    scores: { value: scores, type: Array.isArray(scores) ? "array" : typeof scores },
    details: { value: details, type: typeof details },
    emptyValue: { value: emptyValue, type: typeof emptyValue },
    unknownValue: { value: unknownValue, type: typeof unknownValue }
};

// Display formatted table
console.table(summary);
