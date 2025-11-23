"use strict";

// Initial object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Display initial values
function showUser() {
    document.getElementById("output").textContent = JSON.stringify(user, null, 2);
}

// Form submit handler
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Update object with new values
    user.name = document.getElementById("name").value || user.name;
    user.email = document.getElementById("email").value || user.email;
    user.age = Number(document.getElementById("age").value) || user.age;

    showUser();
});

// Show initial user data on page load
showUser();
