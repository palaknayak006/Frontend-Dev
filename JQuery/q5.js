$(document).ready(function () {

    // 1. Click a manager → highlight all direct reports
    $(".manager").click(function () {
        $(".employee").removeClass("highlight");
        $(this).siblings(".employee").addClass("highlight");
    });

    // 2. Hover employee → show contact via .next()
    $(".employee").hover(
        function () {
            $(this).find(".contact").show();
        },
        function () {
            $(this).find(".contact").hide();
        }
    );

    // 3. Click department → change background of all members
    $(".department").click(function () {
        $(".department").css("background", "#d9ecff");
        $(this).css("background", "#b7dcff");
    });

    // 4. Select random employee → highlight siblings
    let allEmployees = $(".employee");
    let random = Math.floor(Math.random() * allEmployees.length);
    $(allEmployees[random]).siblings().addClass("highlight");

    // 5. Collapse/expand team using .parent() and .find()
    $(".manager").dblclick(function () {
        $(this).parent().find(".employee").slideToggle();
    });

});
