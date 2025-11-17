// Q1: Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary() {
    let salary = 40000; // local variable
    let isPermanent = true; // toggle to see difference

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary:", salary);
    console.log("Global Bonus remains:", bonus);
}

calculateSalary();
