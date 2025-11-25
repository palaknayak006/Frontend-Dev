/*  
   Q2 — Task Scheduler: Micro vs Macro Challenge
   ---------------------------------------------
   Goal:
   - Demonstrate how JavaScript prioritizes microtasks (Promises)
     over macrotasks (setTimeout).
   - Expected order:
       1) Synchronous logs
       2) Microtasks → Promise.then()
       3) Macrotasks → setTimeout()

   WHY?
   The Event Loop clears the Microtask Queue first
   BEFORE checking the Macrotask Queue.
*/

function runQ2() {
    console.log("=== Q2: Microtask vs Macrotask Demo ===\n");

    console.log("Start");  // Synchronous

    // Macrotask
    setTimeout(() => {
        console.log("⏳ setTimeout (Macrotask) executed");
    }, 0);

    // Microtask
    Promise.resolve().then(() => {
        console.log("⚡ Promise.then (Microtask) executed");
    });

    console.log("End");   // Synchronous
}

/*
   🔍 EXPECTED OUTPUT ORDER:
   -------------------------
   1) Start
   2) End
   3) ⚡ Promise.then (Microtask) executed
   4) ⏳ setTimeout (Macrotask) executed

   ✔ Promises run BEFORE setTimeout 
     because microtasks ALWAYS empty first.
*/
