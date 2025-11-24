class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `Name: ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() {
        return `Branch: ${this.branch}`;
    }
}

const stu = new Student("Palak", "IT");

document.getElementById("output").innerHTML = `
${stu.showName()} <br>
${stu.showBranch()}
`;
