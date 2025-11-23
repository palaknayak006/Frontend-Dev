"use strict";
/*
Q1: E-Commerce Product Manager
- Product class with id, name, price, category
- Methods: applyDiscount(percent), displayDetails()
- Create sample products, keep in array
- Render list in DOM
- Filter and console.log products with price > 1000
*/

// DOM references
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const addProductBtn = document.getElementById("addProductBtn");
const showExpensiveBtn = document.getElementById("showExpensiveBtn");
const productListEl = document.getElementById("productList");

// Product class
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = String(name);
    this.price = Number(price);
    this.category = String(category);
  }

  // apply discount in percent (e.g., 10 -> reduce price by 10%)
  applyDiscount(percent) {
    if (typeof percent !== "number" || Number.isNaN(percent)) return;
    const factor = (100 - percent) / 100;
    this.price = Math.round((this.price * factor) * 100) / 100; // round to 2 decimals
  }

  // return a nicely formatted string with product details
  displayDetails() {
    return `Product #${this.id} — ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
  }
}

// In-memory product store
const products = [];
let nextProductId = 1;

// helper: create DOM list item for product
function createProductListItem(product) {
  const li = document.createElement("li");

  const left = document.createElement("div");
  const title = document.createElement("div");
  title.textContent = product.name;
  title.style.fontWeight = "600";
  const meta = document.createElement("div");
  meta.className = "meta";
  meta.textContent = `${product.category} • ₹${product.price.toFixed(2)}`;

  left.appendChild(title);
  left.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "actions";

  // Apply 10% discount button
  const discountBtn = document.createElement("button");
  discountBtn.textContent = "Apply 10%";
  discountBtn.addEventListener("click", () => {
    product.applyDiscount(10);
    // Update meta text and re-render
    meta.textContent = `${product.category} • ₹${product.price.toFixed(2)}`;
    console.log(`Discount applied: ${product.displayDetails()}`);
  });

  // Details button logs formatted details
  const detailsBtn = document.createElement("button");
  detailsBtn.textContent = "Details";
  detailsBtn.addEventListener("click", () => {
    console.log(product.displayDetails());
    alert(product.displayDetails());
  });

  actions.appendChild(discountBtn);
  actions.appendChild(detailsBtn);

  // Badge for expensive items
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = product.price > 1000 ? "Premium" : "Standard";

  li.appendChild(left);
  li.appendChild(badge);
  li.appendChild(actions);

  return li;
}

// render entire list
function renderProductList() {
  productListEl.innerHTML = "";
  products.forEach((p) => {
    productListEl.appendChild(createProductListItem(p));
  });
}

// add new product from inputs
function addProductFromInputs() {
  const name = productNameInput.value.trim();
  const priceVal = Number(productPriceInput.value);
  const category = productCategoryInput.value.trim() || "general";

  if (!name) {
    alert("Please enter a product name.");
    return;
  }
  if (Number.isNaN(priceVal) || priceVal <= 0) {
    alert("Enter a valid positive price.");
    return;
  }

  const product = new Product(nextProductId++, name, priceVal, category);
  products.push(product);
  renderProductList();

  // clear inputs
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productNameInput.focus();
}

// show products price > 1000 in console
function logExpensiveProducts() {
  const expensive = products.filter((p) => p.price > 1000);
  if (expensive.length === 0) {
    console.log("No products with price > 1000 found.");
  } else {
    console.log("Products with price > 1000:");
    expensive.forEach((p) => console.log(p.displayDetails()));
  }
}

// Hook events
addProductBtn.addEventListener("click", addProductFromInputs);
productPriceInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addProductFromInputs();
});
showExpensiveBtn.addEventListener("click", logExpensiveProducts);

// --- Create some sample products to start with ---
products.push(new Product(nextProductId++, "Gaming Chair", 7500, "furniture"));
products.push(new Product(nextProductId++, "USB-C Cable", 299, "accessories"));
products.push(new Product(nextProductId++, "Wireless Mouse", 1299, "electronics"));
products.push(new Product(nextProductId++, "Notebook", 199, "stationery"));

renderProductList();

// Export for Node testability (optional)
if (typeof module !== "undefined") {
  module.exports = { Product, products };
}
