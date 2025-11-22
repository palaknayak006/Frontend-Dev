"use strict";

// Q2 – Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonuses(empList) {
    for (let i = 0; i < empList.length; i++) {
        try {
            const emp = empList[i];

            // Error if object is missing
            if (!emp || !emp.name || !emp.salary || !emp.years) {
                throw new Error(`Invalid employee data at index ${i}`);
            }

            // Convert to numbers
            const salary = Number(emp.salary);
            const years = Number(emp.years);

            if (isNaN(salary) || isNaN(years)) {
                throw new Error(`Conversion failed for ${emp.name}`);
            }

            // Bonus calculation
            let bonus = years > 3 ? salary * 0.1 : salary * 0.05;

            console.log(
                `Employee: ${emp.name}\n` +
                `Salary: ₹${salary}\n` +
                `Years: ${years}\n` +
                `Bonus: ₹${bonus}\n` +
                "-----------------------------"
            );

        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }
}

calculateBonuses(employees);
