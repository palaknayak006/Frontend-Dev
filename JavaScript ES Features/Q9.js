"use strict";

/*
Q9 – JSON Audit

Tasks:
1. Parse JSON inside try...catch.
2. Detect missing keys (user, age).
3. Detect invalid JSON.
4. Push valid data to clean array.
5. Log errors with line number.
6. Convert age to Number.
7. Filter out users under 18.
*/

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errorLog = [];

console.log("=== JSON AUDIT STARTED ===\n");

for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];

    try {
        const parsed = JSON.parse(line);

        // Check required keys
        if (!parsed.user || parsed.age === undefined) {
            throw new Error("Missing 'user' or 'age' field");
        }

        // Convert age to number
        parsed.age = Number(parsed.age);

        if (isNaN(parsed.age)) {
            throw new Error("Age is not a valid number");
        }

        // Filter under-18 users
        if (parsed.age < 18) {
            throw new Error("User under 18 (filtered)");
        }

        // If all checks pass → valid entry
        cleanData.push(parsed);

    } catch (err) {
        errorLog.push({
            line: i + 1,
            input: line,
            message: err.message
        });
    }
}

console.log("=== CLEAN DATA ===");
console.log(cleanData);

console.log("\n=== ERROR LOG ===");
console.log(errorLog);

console.log("\nTotal Valid Entries:", cleanData.length);
console.log("Total Errors:", errorLog.length);
