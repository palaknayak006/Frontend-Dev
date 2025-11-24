function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const triple = makeMultiplier(3);

document.getElementById("output").innerHTML = `
Triple of 5 = ${triple(5)}<br><br>
<b>Explanation:</b> The inner function remembers 'multiplier' because of closure.
`;
