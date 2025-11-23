"use strict";

// Cart class
class Cart {
    constructor() {
        this.items = [];
        this.discount = 0; // %
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    applyCoupon(code) {
        const regex = /^(SAVE|DISC)(\d{2})$/;

        const match = code.match(regex);
        if (!match) {
            return "Invalid coupon format!";
        }

        // Extract discount
        this.discount = Number(match[2]);
        return `Coupon applied: ${this.discount}% off`;
    }

    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price * item.quantity;
        });

        // Apply discount
        if (this.discount > 0) {
            total = total - (total * (this.discount / 100));
        }

        return total.toFixed(2);
    }
}

// Create cart instance
const cart = new Cart();

// Update UI
function updateCart() {
    document.getElementById("cartOutput").textContent =
        JSON.stringify({
            items: cart.items,
            discount: cart.discount + "%",
            total: cart.getTotal()
        }, null, 2);
}

// Add item handler
document.getElementById("addItemBtn").addEventListener("click", () => {
    const name = document.getElementById("itemName").value;
    const price = Number(document.getElementById("itemPrice").value);
    const qty = Number(document.getElementById("itemQty").value);

    if (!name || !price || !qty) {
        alert("Please fill all item details!");
        return;
    }

    cart.addItem(name, price, qty);
    updateCart();
});

// Coupon handler
document.getElementById("applyCouponBtn").addEventListener("click", () => {
    const code = document.getElementById("coupon").value.trim();
    const result = cart.applyCoupon(code);

    alert(result);
    updateCart();
});

// Initial render
updateCart();
