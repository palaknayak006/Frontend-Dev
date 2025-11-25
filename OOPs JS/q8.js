/* ---------------------------------------------------------
   Q8 — Movie Ticket Booking 🎬🎟️
   Inheritance + Prototype Chain
----------------------------------------------------------*/

class MovieTicket {
  constructor(movie, seat, price) {
    this.movieName = movie;
    this.seatNo = seat;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `🎬 ${this.movieName} | Seat: ${this.seatNo} | ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movie, seat, price, fee) {
    super(movie, seat, price);
    this.convenienceFee = fee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

function runQ8() {
  console.log("=== Q8 — Movie Tickets ===");

  const t = new OnlineTicket("Avengers", "B12", 300, 30);

  console.log("🎟️ Ticket:", t.printTicket());
  console.log("💰 Total:", t.getTotalAmount());
}
