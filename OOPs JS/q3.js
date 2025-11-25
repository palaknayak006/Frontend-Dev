/* ---------------------------------------------------------
   Q3 — Product Discount System 🛒💸
   Constructor Function + Prototype Method
----------------------------------------------------------*/

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  const discountAmount = (this.price * percent) / 100;
  const newPrice = this.price - discountAmount;
  return +newPrice.toFixed(2);
};

function runQ3() {
  console.log("=== Q3 — Product Discount System ===");

  const p1 = new Product("Laptop", 50000);
  const p2 = new Product("Shoes", 2000);
  const p3 = new Product("Book", 500);

  console.log("💻 Laptop after 10% off:", p1.applyDiscount(10));
  console.log("👟 Shoes after 20% off:", p2.applyDiscount(20));
  console.log("📘 Book after 5% off:", p3.applyDiscount(5));

  console.log("\n🔍 Abstraction: applyDiscount() hides internal discount formula.");
}
