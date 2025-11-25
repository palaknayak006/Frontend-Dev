/* Q1 — Coffee Order Simulation using Callbacks */

function orderCoffee(type, callback) {
  console.log(`☕ Taking order for: ${type}`);

  setTimeout(() => {
    console.log(`➡ Preparing your ${type}...`);

    setTimeout(() => {
      console.log(`🎉 ${type} is ready!`);
      callback(`${type} served hot!`);
    }, 2000);

  }, 1000);
}

function runQ1() {
  console.log("=== Q1 Output ===");

  orderCoffee("Cappuccino", function (message) {
    console.log("Callback says:", message);
  });
}
