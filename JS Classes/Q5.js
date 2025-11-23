"use strict";

// RegEx Patterns
const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seatsRegex = /^([1-9]|10)$/;

// Get elements
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const seatsInput = document.getElementById("seatsInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const seatsError = document.getElementById("seatsError");

const ticketOutput = document.getElementById("ticketOutput");

// Booking button event
document.getElementById("bookBtn").addEventListener("click", function () {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const seats = seatsInput.value.trim();

    let isValid = true;

    // Validate name
    if (!nameRegex.test(name)) {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validate email
    if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validate seats
    if (!seatsRegex.test(seats)) {
        seatsError.style.display = "block";
        isValid = false;
    } else {
        seatsError.style.display = "none";
    }

    // If validation fails, stop
    if (!isValid) return;

    // Create booking object
    const ticket = {
        name: name,
        email: email,
        seats: Number(seats)
    };

    // Display output
    ticketOutput.innerHTML = `
        <strong>Booking Confirmed!</strong><br>
        Name: ${ticket.name}<br>
        Email: ${ticket.email}<br>
        Seats: ${ticket.seats}<br>
    `;
});
