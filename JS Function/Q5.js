function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.showBranch = function () {
    return `Branch: ${this.branch}`;
};

const s1 = new Student("Aman", "CSE");

document.getElementById("output").innerHTML = `
${s1.showName()} <br>
${s1.showBranch()}
`;
