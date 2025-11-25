/* ---------------------------------------------------------
   Q9 — Fitness App Analytics 🏋️🔥
----------------------------------------------------------*/

class FitnessAnalytics {
  constructor(data) {
    if (!data.length) throw new Error("Dataset is empty!");
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(u => u.steps > 7000);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, u) => sum + u.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(u => `${u.user} burned ${u.calories} calories`);
  }
}

function runQ9() {
  console.log("=== Q9 — Fitness Analytics ===");

  const data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 },
  ];

  try {
    const analytics = new FitnessAnalytics(data);

    console.log("🏃 Active Users:", analytics.getActiveUsers());
    console.log("🔥 Average Calories:", analytics.getAverageCalories());
    console.log("📝 Summary:", analytics.getUserSummary());
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}
