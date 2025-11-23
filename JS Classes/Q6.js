"use strict";

// Employee Class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus in percent
    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

// Create employee objects
const employees = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Sana", "HR", 28000),
    new Employee(3, "Ravi", "Finance", 35000),
    new Employee(4, "Neha", "Marketing", 26000),
    new Employee(5, "Karan", "IT", 32000)
];

// Apply 10% bonus to each employee
employees.forEach(emp => emp.applyBonus(10));

// Insert into table
const empTable = document.getElementById("empTable");

employees.forEach(emp => {
    const row = `
        <tr>
            <td>${emp.name}</td>
            <td>₹ ${emp.getAnnualSalary()}</td>
        </tr>
    `;
    empTable.innerHTML += row;
});

// Calculate total annual payout using reduce()
const totalPayout = employees.reduce(
    (sum, emp) => sum + emp.getAnnualSalary(),
    0
);

// Display total payout
document.getElementById("totalPayout").innerHTML =
    `<strong>₹ ${totalPayout.toLocaleString()}</strong>`;
