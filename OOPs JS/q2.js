/* ---------------------------------------------------------
   Q2 — Online Food Ordering 🍔🧾
   Using map(), reduce(), try/catch, error throwing
----------------------------------------------------------*/

const menu = {
  burger: 120,
  pizza: 250,
  fries: 80,
  coke: 40,
};

function calculateBill(orderItems) {
  return orderItems
    .map(item => {
      if (!menu[item]) throw new Error(`❌ Invalid Item Ordered: ${item}`);
      return menu[item];
    })
    .reduce((sum, price) => sum + price, 0);
}

function runQ2() {
  console.log("=== Q2 — Online Food Ordering ===");

  try {
    const items = ["burger", "fries", "pizza"]; 
    const total = calculateBill(items);
    console.log(`🧾 Items: ${items.join(", ")}`);
    console.log(`💰 Total Bill: ₹${total}`);
  } catch (err) {
    console.log(err.message);
  }

  // Test invalid item
  try {
    calculateBill(["burger", "invalid"]);
  } catch (err) {
    console.log("⚠️ Error:", err.message);
  }
}
