"use strict";

let currentStep = 1;

const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3")
];

function showStep(step) {
    steps.forEach(s => s.classList.remove("active"));
    steps[step - 1].classList.add("active");
}

document.getElementById("backBtn").addEventListener("click", () => {
    if (currentStep > 1) currentStep--;
    showStep(currentStep);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentStep === 1) {
        let name = document.getElementById("name").value.trim();
        if (!name) return alert("Name is required");
    }

    if (currentStep === 2) {
        let email = document.getElementById("email").value.trim();
        if (!email.includes("@")) return alert("Valid email required");
    }

    if (currentStep === 3) {
        let pass = document.getElementById("password").value.trim();
        if (pass.length < 6) return alert("Password must be 6 chars");
    }

    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
    } else {
        document.getElementById("summaryBox").innerHTML =
            `<h3>Summary:</h3>
             Name: ${document.getElementById("name").value}<br>
             Email: ${document.getElementById("email").value}<br>
             Password: ${document.getElementById("password").value}`;
    }
});
