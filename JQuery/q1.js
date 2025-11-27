$(document).ready(function () {

    // ================================
    // 1. Greeting based on time of day
    // ================================
    let hour = new Date().getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good Morning ☀️";
    } else if (hour < 18) {
        greetingText = "Good Afternoon 🌤️";
    } else {
        greetingText = "Good Evening 🌙";
    }

    $("#greeting").text(greetingText);

    // =================================
    // 2. Change greeting on button click
    // =================================
    $("#changeBtn").click(function () {
        $("#greeting").text("Keep pushing yourself. Success is near! 💪");
    });

    // ======================================
    // 3. Toggle visibility of welcome message
    // ======================================
    $("#toggleBtn").click(function () {
        $("#welcomeMsg").toggle();
    });

    // ===================================
    // 4. Show alert when greeting clicked
    // ===================================
    $("#greeting").click(function () {
        alert("You clicked the greeting!");
    });

});
