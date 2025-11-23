"use strict";

// Input Elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const successMsg = document.getElementById("successMsg");

// Validation Patterns
const usernamePattern = /^[A-Za-z0-9]{5,}$/;
const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Clear messages initially
successMsg.style.display = "none";

// Validate Function
function validate() {
    let isValid = true;

    // USERNAME VALIDATION
    if (!usernamePattern.test(username.value)) {
        username.classList.add("error");
        username.classList.remove("success");
        userError.innerText = "Username must be at least 5 characters.";
        isValid = false;
    } else {
        username.classList.remove("error");
        username.classList.add("success");
        userError.innerText = "";
    }

    // PASSWORD VALIDATION
    if (!passwordPattern.test(password.value)) {
        password.classList.add("error");
        password.classList.remove("success");
        passError.innerText =
            "Password must be 8+ chars, include uppercase, lowercase, number, and symbol.";
        isValid = false;
    } else {
        password.classList.remove("error");
        password.classList.add("success");
        passError.innerText = "";
    }

    return isValid;
}

// Login Button Click
loginBtn.addEventListener("click", () => {
    if (validate()) {
        successMsg.style.display = "block";
        successMsg.innerHTML = "<strong>Login Successful!</strong>";
    } else {
        successMsg.style.display = "none";
    }
});
