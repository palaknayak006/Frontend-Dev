"use strict";

/*
Q10 – Nested Hoisting and Closures

Original Code:
function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}

Tasks:
1. Predict and explain output.
2. Show how hoisting creates separate memory contexts.
3. Convert inner() to arrow form.
4. Add debug notes.
*/

// ============================
// ORIGINAL CODE (HOISTED BEHAVIOR)
// ============================

console.log("=== ORIGINAL OUTPUT ===");

function outer() {
    // Hoisting behavior:
    // var count is hoisted → initialized as undefined
    console.log(count); // → undefined
    var count = 5;

    function inner() {
        // inner() has its own 'count'
        console.log(count); // → undefined
        var count = 10;
    }

    inner();
}

outer();

/*
Explanation:

outer():
    var count hoisted → undefined
    First console.log → undefined
    Then count = 5

inner():
    var count hoisted inside inner → undefined
    console.log(count) → undefined
    Then count = 10 (local to inner)

This shows how hoisting creates separate memory contexts.
*/


// ============================
// ARROW FUNCTION VERSION
// ============================

console.log("\n=== ARROW FUNCTION VERSION ===");

function outerArrow() {
    console.log(count); // undefined
    var count = 5;

    const inner = () => {
        // Arrow function does NOT create new 'this'
        // BUT still has its own block scope
        console.log(count); // → undefined (its own hoisted var)

        var count = 10;
    };

    inner();
}

outerArrow();


// ============================
// DEBUG SESSION NOTES
// ============================

/*
Debugging Tips:
1. Set a breakpoint on each console.log.
2. In VS Code, watch the variable "count".
3. Observe call stack:
     outer() → inner()
4. Check how each function allocates a fresh 'count'
   due to hoisting inside its local scope.
*/
