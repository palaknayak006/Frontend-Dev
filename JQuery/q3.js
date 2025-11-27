$(document).ready(function () {

    // 1. Click question → toggle answer visibility
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover → change color (handled by CSS :hover)

    // 3. Double-click question → collapse ALL answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // 4. Focus on input → highlight parent
    $("input").focus(function () {
        $(this).closest(".faq-item").addClass("highlight");
    });

    // 5. Blur → remove highlight
    $("input").blur(function () {
        $(this).closest(".faq-item").removeClass("highlight");
    });

});
