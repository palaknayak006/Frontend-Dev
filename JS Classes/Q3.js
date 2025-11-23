"use strict";

// Book Class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return false;
        }
        this.isIssued = true;
        return true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

// Create Book Objects
const books = [
    new Book("JavaScript Basics", "John Doe", "101"),
    new Book("Python Mastery", "Alice Ray", "102"),
    new Book("Data Structures", "David Kim", "103"),
    new Book("Java Programming", "Sam White", "104"),
];

// Display Available Books (Not Issued)
function displayAvailableBooks() {
    const container = document.getElementById("availableBooks");
    container.innerHTML = "";

    const available = books.filter(book => !book.isIssued);

    available.forEach(book => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${book.title}</strong> — ${book.author} (ISBN: ${book.ISBN})`;
        container.appendChild(div);
    });
}

displayAvailableBooks();

// Handle Issue Book
function issueBookHandler() {
    const isbn = document.getElementById("isbnInput").value.trim();
    const message = document.getElementById("msg");

    const book = books.find(b => b.ISBN === isbn);

    if (!book) {
        message.textContent = "❌ Book not found!";
        message.className = "error";
        return;
    }

    if (book.issueBook()) {
        message.textContent = `✔ "${book.title}" issued successfully!`;
        message.className = "success";
    } else {
        message.textContent = "❌ Book is already issued!";
        message.className = "error";
    }

    displayAvailableBooks();
}
