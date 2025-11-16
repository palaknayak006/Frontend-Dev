// Q3. Monthly Expense Tracker

let expenses = [5000, 1200, 8000, 1500, 2000]; // food, travel, rent, bills, leisure

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];

// Average monthly expense
let average = total / expenses.length;

// Add 10% tax
let finalAmount = total;
finalAmount += finalAmount * 0.10;

// Display results
console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount (after 10% tax):", finalAmount.toFixed(2));
