"use strict";

const dropBtn = document.getElementById("dropdown");
const options = document.getElementById("options");

dropBtn.addEventListener("click", () => {
    options.style.display = options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
        dropBtn.textContent = e.target.textContent;
        options.style.display = "none";
    }
});

// Close dropdown when clicking outside (capture phase)
document.addEventListener(
    "click",
    () => { options.style.display = "none"; },
    true
);
