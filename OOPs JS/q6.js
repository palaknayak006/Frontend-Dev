/* ---------------------------------------------------------
   Q6 — E-Commerce Inventory 📦📊
   filter(), sort(), reduce(), grouping
----------------------------------------------------------*/

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 10 },
  { id: 3, name: "Phone", category: "Electronics", price: 30000, stock: 5 },
  { id: 4, name: "Watch", category: "Fashion", price: 1500, stock: 2 },
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    group[p.category] = group[p.category] || [];
    group[p.category].push(p);
    return group;
  }, {});
}

function runQ6() {
  console.log("=== Q6 — Inventory System ===");

  console.log("🔻 Low Stock:", getLowStockProducts());
  console.log("💰 Sorted by Price:", sortProductsByPrice());
  console.log("📦 Total Inventory Value:", calculateTotalInventoryValue());
  console.log("📂 Grouped by Category:", groupByCategory());
}
