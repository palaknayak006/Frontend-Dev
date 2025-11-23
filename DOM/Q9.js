"use strict";

const form = document.getElementById("myForm");

const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    let valid = true;

    if (!name) {
        nameErr.textContent = "Name required";
        valid = false;
    }

    if (!email.includes("@")) {
        emailErr.textContent = "Invalid email";
        valid = false;
    }

    if (pass.length < 6) {
        passErr.textContent = "Min 6 characters";
        valid = false;
    }

    if (valid) {
        success.textContent = "Form Submitted Successfully!";
        form.reset();
    }
});

document.addEventListener("input", () => {
    nameErr.textContent = "";
    emailErr.textContent = "";
    passErr.textContent = "";
    success.textContent = "";
});
