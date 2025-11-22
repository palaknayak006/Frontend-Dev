"use strict";

/*
Q6 – Pyramid Pattern Generator

Tasks:
1. Generate the pattern:
*
* *
* * *
* * * *
2. Replace let with var and observe changes.
3. Add user-controlled outer loop limit (default = 5).
4. Use strict mode to catch undeclared loop variables.
*/

// ====== USER INPUT (you can change this value) ======
let rows = 5; // default rows


console.log("=== PYRAMID PATTERN ===");

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}


/*  
==============================
 PART 2 — Using var instead of let
==============================
Observation:
- var is function-scoped, not block-scoped.
- It causes the 'i' and 'j' variables to leak outside the loop.
- Using strict mode will catch errors if a variable is undeclared.
*/

console.log("\n=== USING var (Observation Mode) ===");

for (var a = 1; a <= rows; a++) {
    var line = ""; // also leaks outside the loop

    for (var b = 1; b <= a; b++) {
        line += "* ";
    }

    console.log(line);
}

console.log("\nValue of 'a' after loop (var leaks):", a); // accessible
console.log("Value of 'b' after loop:", b); // also accessible
console.log("Value of 'line' after loop:", line);


/*
Debug Notes:
- Using breakpoints in VS Code shows re-use of same variables (var).
- Let creates new block-scoped variables for each loop.
*/
