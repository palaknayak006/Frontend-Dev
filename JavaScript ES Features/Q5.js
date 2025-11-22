"use strict";

/*
Q5 – Hoisting Lab: The Sequence Trap

Original code:
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() { console.log(status); }

Explanation (before fix):
• `var score` → hoisted BUT initialized as undefined → logs undefined
• `announce()` → works because functions are fully hoisted
• `let status` → in Temporal Dead Zone → calling startGame() before its line causes ReferenceError
• startGame() works only after status is initialized
*/

// ======= FIXED VERSION =======
console.log("Score (before declaration):", undefined); // predictable

announce(); // works – fully hoisted

var score = 50; // now initialized

function announce() {
    console.log("Game started");
}

// Declare before use to avoid TDZ error
let status = "ready";

startGame(); // now safe

function startGame() {
    console.log("Current status:", status);
}


// ======= Arrow Function Comparison (Hoisting Difference) =======
/*
Arrow functions declared with const/let are NOT hoisted like normal functions.
Calling them before definition results in ReferenceError.
*/

const startGameArrow = () => {
    console.log("Arrow Function Status:", status);
};

startGameArrow(); // Works only because it's called after declaration

