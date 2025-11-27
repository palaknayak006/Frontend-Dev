$(document).ready(function () {

    let notificationsEnabled = false;

    // 1. Subscribe → enable notifications
    $("#subscribe").click(function () {
        notificationsEnabled = true;
        $("#message").html("<div class='success'>Subscribed successfully ✔</div>");
    });

    // 2. Unsubscribe → disable notifications
    $("#unsubscribe").click(function () {
        notificationsEnabled = false;
        $("#message").html("<div class='success'>Unsubscribed ❌</div>");
    });

    // 3. Add new topic dynamically + attach click event using .on()
    $("#addTopic").click(function () {
        $("#topics").append("<div class='topic'>New Topic</div>");
    });

    // Handle topic clicks
    $("#topics").on("click", ".topic", function () {
        alert("You selected topic: " + $(this).text());
    });

    // 4. Remove specific topic and detach event
    $(".topic").eq(2).off("click");

});
