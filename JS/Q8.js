// Q8. Employee Salary Projection

let currentSalary = 30000;
let incrementRate = 10; // in %

let projection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100);
    projection.push({
        Year: "Year " + year,
        Salary: Math.round(currentSalary)
    });
}

console.table(projection);
