/* ---------------------------------------------------------
   Q5 — Ride Sharing 🚕💳
   Classes + Errors + try/catch
----------------------------------------------------------*/

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  calculateFare() {
    if (!this.distance || this.distance < 0) {
      throw new Error("❌ Invalid distance provided");
    }
    return this.distance * 12; // ₹12 per km
  }
}

function runQ5() {
  console.log("=== Q5 — Ride Sharing ===");

  const driver = new Driver("Rohit", 4.9, "Swift Dzire");
  const trip = new Trip("Delhi", "Noida", 15);

  try {
    const fare = trip.calculateFare();
    console.log(`🚕 Driver: ${driver.name} (${driver.vehicle})`);
    console.log(`💰 Fare: ₹${fare}`);
  } catch (err) {
    console.log(err.message);
  }

  // invalid example
  try {
    new Trip("A", "B", -4).calculateFare();
  } catch (err) {
    console.log("⚠️ Error:", err.message);
  }
}
