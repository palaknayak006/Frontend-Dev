/*
Q8 – Strict Mode Showdown
*/

// =====================================
// WITHOUT STRICT MODE
// =====================================
console.log("=== Without Strict Mode ===");

function demoLoose(a, a) {
    total = 10;        // implicit global (unsafe)

    // prevent VS Code syntax error
    eval("delete total");

    console.log("Loose demo ran (unsafe)");
}

demoLoose(5, 10);


// =====================================
// WITH STRICT MODE (USING eval TO SHOW ERRORS)
// =====================================
console.log("\n=== With Strict Mode ===");

function runStrictDemo() {
    try {
        eval(`
            "use strict";
            function demo(a, a) {   // duplicate params → SyntaxError
                total = 10;        // implicit global → ReferenceError
                delete total;      // illegal delete → SyntaxError
            }
            demo(5, 10);
        `);
    } catch (err) {
        console.log("Strict Mode Error:", err.message);
    }
}

runStrictDemo();


// =====================================
// CORRECT VERSION USING ES6
// =====================================
console.log("\n=== Correct ES6 Version ===");

function demoFixed(x, y) {
    "use strict";

    let total = 10;
    console.log("Total =", total);

    let obj = { value: 99 };
    delete obj.value;  // deleting object properties is allowed

    console.log("Fixed version executed safely.");
}

demoFixed(5, 10);