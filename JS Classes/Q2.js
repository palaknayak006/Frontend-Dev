"use strict";

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    let valid = true;

    // Name: alphabets only
    const nameReg = /^[A-Za-z ]+$/;
    if (!nameReg.test(name.value)) {
        setError(name, "nameError", "Only alphabets allowed");
        valid = false;
    } else {
        setSuccess(name, "nameError");
    }

    // Email validation
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email.value)) {
        setError(email, "emailError", "Invalid email format");
        valid = false;
    } else {
        setSuccess(email, "emailError");
    }

    // Phone: exactly 10 digits
    const phoneReg = /^[0-9]{10}$/;
    if (!phoneReg.test(phone.value)) {
        setError(phone, "phoneError", "Phone must be 10 digits");
        valid = false;
    } else {
        setSuccess(phone, "phoneError");
    }

    // Password validation
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
    if (!passReg.test(password.value)) {
        setError(password, "passError", "Must contain uppercase, number & special char");
        valid = false;
    } else {
        setSuccess(password, "passError");
    }

    if (valid) {
        document.getElementById("finalMsg").textContent = "✔ Form Submitted Successfully!";
        document.getElementById("finalMsg").className = "success";
    } else {
        document.getElementById("finalMsg").textContent = "";
    }
}

function setError(input, errorId, message) {
    input.style.borderColor = "red";
    document.getElementById(errorId).textContent = message;
}

function setSuccess(input, errorId) {
    input.style.borderColor = "green";
    document.getElementById(errorId).textContent = "";
}
