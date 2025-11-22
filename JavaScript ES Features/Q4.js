"use strict";

/*
Q4 – Debugging Mystery

Issue:
Under strict mode, assigning a value to an undeclared variable (greeting)
causes a ReferenceError.

Strict mode prevents accidental creation of global variables.
*/

// ❌ Original buggy function:
// function showMessage() {
//     greeting = "Welcome"; // undeclared → ERROR in strict mode
//     console.log(greeting);
// }

function showMessage() {
    // ✅ Fix: Declare the variable properly using let/const/var
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

/*
Explanation:

• In non-strict mode → JavaScript auto-creates a global variable (greeting)
• In strict mode → This is forbidden → ReferenceError

Strict mode forces variables to be declared before use, 
making code safer and easier to debug.

Debugging Tip:
- Add 'greeting' to Watch in VS Code.
- Step through the call stack:
   showMessage() → logs → returns
*/
