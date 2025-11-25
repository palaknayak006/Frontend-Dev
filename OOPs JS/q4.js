/* ---------------------------------------------------------
   Q4 — Employee Inheritance 👔🏢
   Classes + Inheritance + Method Overriding
----------------------------------------------------------*/

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department} department 👨‍💼`;
  }
}

function runQ4() {
  console.log("=== Q4 — Employee Inheritance ===");

  const e = new Employee("Aarav", "IT");
  const m = new Manager("Sanya", "HR");

  console.log(e.work());
  console.log(m.work()); // override

  console.log("\n✨ Demonstrates Polymorphism at runtime.");
}
