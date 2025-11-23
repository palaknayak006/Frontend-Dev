// Q2 – Live Character Counter with Warning Behavior

const textInput = document.getElementById("textInput");
const counterBox = document.getElementById("counterBox");
const resetBtn = document.getElementById("resetBtn");

let maxChars = 100;

textInput.addEventListener("input", function (e) {
    let remaining = maxChars - textInput.value.length;

    counterBox.textContent = `${remaining} characters left`;

    if (remaining <= 20 && remaining > 0) {
        counterBox.style.color = "goldenrod";
    } else if (remaining <= 0) {
        counterBox.style.color = "red";
        e.preventDefault();
    } else {
        counterBox.style.color = "black";
    }
});

resetBtn.addEventListener("click", function () {
    textInput.value = "";
    counterBox.textContent = `${maxChars} characters left`;
    counterBox.style.color = "black";
});
