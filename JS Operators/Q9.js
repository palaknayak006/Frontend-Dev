// Q9: Odd–Even Number Analyzer

let nums = [];
let result = [];

for (let i = 1; i <= 30; i++) nums.push(i);

nums.forEach(n => {
    if (n % 3 === 0 && n % 5 === 0) result.push("FizzBuzz");
    else if (n % 2 === 0) result.push("Even");
    else result.push("Odd");
});

console.log(result);
