"use strict";

document.addEventListener("click", (e) => {
    if (e.target.dataset.select) {
        let theme = e.target.dataset.select;
        document.body.setAttribute("data-theme", theme);
    }
});
