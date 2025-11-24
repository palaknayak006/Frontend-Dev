function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return `Name: ${this.name}`;
};

function Faculty(name, dept) {
    Person.call(this, name);
    this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.getDept = function () {
    return `Dept: ${this.dept}`;
};

function Professor(name, dept, subject) {
    Faculty.call(this, name, dept);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.getSubject = function () {
    return `Subject: ${this.subject}`;
};

const prof = new Professor("Dr. Sharma", "Science", "Physics");

document.getElementById("output").innerHTML = `
${prof.getName()} <br>
${prof.getDept()} <br>
${prof.getSubject()}
`;
