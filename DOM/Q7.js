"use strict";

const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
    coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

box.addEventListener("dblclick", (e) => {
    const rect = box.getBoundingClientRect();
    const dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = (e.clientX - rect.left) + "px";
    dot.style.top = (e.clientY - rect.top) + "px";

    box.appendChild(dot);
});
