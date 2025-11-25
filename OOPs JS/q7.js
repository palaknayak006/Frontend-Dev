/* ---------------------------------------------------------
   Q7 — Banking Application 🏦💰
   Private fields + error handling
----------------------------------------------------------*/

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ₹${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("❌ Insufficient Balance");
    }
    this.#balance -= amount;
    console.log(`Withdrawn: ₹${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

function runQ7() {
  console.log("=== Q7 — Banking ===");

  const acc = new BankAccount();

  acc.deposit(5000);

  try {
    acc.withdraw(2000);
    acc.withdraw(4000); // will throw
  } catch (err) {
    console.log("⚠️ Error:", err.message);
  }

  console.log("🏦 Final Balance:", acc.getBalance());
}
