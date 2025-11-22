"use strict";

// Q3 – Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to categorize results
const validTransactions = [];
const invalidTransactions = [];

function validateTransactions(txnList) {
    for (let i = 0; i < txnList.length; i++) {
        try {
            const txn = txnList[i];

            // Case 1: Null entry
            if (txn === null) {
                throw new Error(`Null transaction at index ${i}`);
            }

            // Case 2: Missing id or amount
            if (!txn.id || txn.amount === undefined) {
                throw new Error(`Missing data in transaction at index ${i}`);
            }

            // Case 3: Negative amount
            if (txn.amount < 0) {
                throw new Error(`Negative amount in transaction ID ${txn.id}`);
            }

            // Valid transaction
            validTransactions.push(txn);

        } catch (err) {
            invalidTransactions.push({ index: i, message: err.message });
        }
    }

    // Final Reports
    console.log("===== VALID TRANSACTIONS =====");
    console.log(validTransactions);

    console.log("\n===== INVALID TRANSACTIONS =====");
    console.log(invalidTransactions);

    console.log(`\nTotal Valid: ${validTransactions.length}`);
    console.log(`Total Invalid: ${invalidTransactions.length}`);
}

// Call the validator
validateTransactions(transactions);
