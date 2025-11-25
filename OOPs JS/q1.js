/* ---------------------------------------------------------
   Q1 — Student Result Processing 🧮🎓
   Using Classes + reduce() + Grading Logic
----------------------------------------------------------*/

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (!this.marks.length) return 0;
    const total = this.marks.reduce((sum, m) => sum + m, 0);
    return +(total / this.marks.length).toFixed(2);
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

function runQ1() {
  console.log("=== Q1 — Student Result Processing ===");

  const s1 = new Student("Aman", [90, 85, 88, 92]);
  const s2 = new Student("Riya", [70, 60, 80, 75]);
  const s3 = new Student("Kabir", [40, 35, 50, 45]);

  [s1, s2, s3].forEach(stu => {
    console.log(`\n👨‍🎓 Student: ${stu.name}`);
    console.log(`📊 Average: ${stu.calculateAverage()}`);
    console.log(`🏅 Grade: ${stu.getGrade()}`);
  });
}
