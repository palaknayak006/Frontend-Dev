"use strict";

const modal = document.getElementById("modal");
const bigImg = document.getElementById("bigImage");

document.querySelector(".gallery").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        bigImg.src = e.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

document.getElementById("modalContent").addEventListener("click", (e) => {
    e.stopPropagation();
});
