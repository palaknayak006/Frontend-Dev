$(document).ready(function () {

    // 1. Add new post
    $("#addPost").click(function () {
        $("#blogList").append("<div class='post'>New blog post added.</div>");
    });

    // 2. Prepend featured post
    $("#prependPost").click(function () {
        $("#blogList").prepend("<div class='post highlight'>🔥 Featured Post</div>");
    });

    // 3. Remove last post
    $("#removeLast").click(function () {
        $("#blogList .post:last").remove();
    });

    // 4. Add tags using .before() / .after()
    $(".post").each(function () {
        $(this).before("<span>📌 Tag</span>");
        $(this).after("<hr>");
    });

    // 5. Highlight posts with “important”
    $(".post:contains('important')").addClass("highlight");

});
