$(document).ready(function () {

    $("#search").keyup(function () {

        let text = $(this).val().toLowerCase();
        let matched = 0;

        $("#courseList div").each(function () {

            let course = $(this).text().toLowerCase();

            // Reset original color
            $(this).css("background", "#f2f6ff");

            // Match filter
            if (course.includes(text)) {
                $(this).show();
                matched++;

                // Highlight
                $(this).css("background", "#d4ffda");

            } else {
                $(this).hide();
            }

        });

        $("#count").text("Matched courses: " + matched);
    });

});
