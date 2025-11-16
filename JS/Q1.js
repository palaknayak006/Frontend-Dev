// Q1. Personalized Login Greeting

// Declare username
let userName = "Palak";

// Get current hour
let hour = new Date().getHours();

// Time-based greeting using conditions
if (hour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (hour >= 12 && hour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
