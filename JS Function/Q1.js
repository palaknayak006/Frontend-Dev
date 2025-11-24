// Q1: greetUser(name, callback) demonstrating callback flow

// Callback function
function showEndMessage() {
    return "Welcome to the course!";
}

// Main function
function greetUser(name, callback) {
    const message1 = "Hello " + name;
    const message2 = callback(); // Call the callback

    // Display on webpage
    document.getElementById("result").innerHTML =
        message1 + "<br>" + message2;

    // Also log in console for students
    console.log(message1);
    console.log(message2);
}

// Call the function
greetUser("Palak", showEndMessage);
