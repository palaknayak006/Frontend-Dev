Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i));
    }
    return result;
};

const nums = [1, 2, 3];
const doubled = nums.myMap(n => n * 2);

document.getElementById("output").innerHTML = `
Original: ${nums} <br>
Custom myMap Output: ${doubled}
`;
