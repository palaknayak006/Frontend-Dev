function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    return `${this.brand} - ${this.model}`;
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "Civic");

document.getElementById("output").innerHTML = `
Car 1: ${car1.getDetails()} <br>
Car 2: ${car2.getDetails()}
`;
