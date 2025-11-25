/* --------------------------------------------------
   Q3 — BUG TRACKER (CALLBACK → PROMISE UPGRADE) 🐞✨
-----------------------------------------------------*/

function getBugs() {
  console.log("⏳ Fetching bugs...");

  return new Promise((resolve, reject) => {
    const apiFailed = Math.random() < 0.3; // 30% chance of failure

    setTimeout(() => {
      if (apiFailed) {
        reject("❌ API Error: Unable to fetch bugs.");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// 🔥 THIS is the function that HTML will call
function runQ3() {
  console.log("\n=================== Q3 OUTPUT ===================");

  getBugs()
    .then(bugs => {
      console.log("🐞 BUG LIST");
      console.table(bugs);
    })
    .catch(error => console.log(error))
    .finally(() => {
      console.log("✨ Operation complete");
    });

  console.log("=================================================\n");
}
