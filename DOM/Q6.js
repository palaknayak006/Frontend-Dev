"use strict";

const search = document.getElementById("search");
const rows = document.querySelectorAll("#tableBody tr");
const noResults = document.getElementById("noResults");

search.addEventListener("input", () => {
    let value = search.value.toLowerCase();
    let found = false;

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        if (text.includes(value)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    noResults.style.display = found ? "none" : "block";
});
