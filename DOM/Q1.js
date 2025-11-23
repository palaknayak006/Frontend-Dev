"use strict";

// Select DOM elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Add product to list
addBtn.addEventListener("click", () => {
    const value = productInput.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="text">${value}</span>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

// Event Delegation on UL
productList.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest("li");

    // DELETE product
    if (target.classList.contains("deleteBtn")) {
        li.remove();
    }

    // EDIT product
    if (target.classList.contains("editBtn")) {
        const textSpan = li.querySelector(".text");

        const input = document.createElement("input");
        input.type = "text";
        input.value = textSpan.textContent;

        li.replaceChild(input, textSpan);
        input.focus();

        // Auto-save when clicking outside
        const saveEdit = (event) => {
            if (event.target !== input) {
                const span = document.createElement("span");
                span.className = "text";
                span.textContent = input.value.trim() || "Unnamed";
                li.replaceChild(span, input);

                document.removeEventListener("click", saveEdit);
            }
        };

        document.addEventListener("click", saveEdit);
    }
});