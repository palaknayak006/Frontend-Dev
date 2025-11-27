// Version 1 for carousel
jq1(document).ready(function () {
    let i = 0;
    setInterval(function () {
        jq1("#carousel").text("Carousel Slide " + (i + 1));
        i = (i + 1) % 5;
    }, 2000);
});

// Version 2 for modal
jq2(document).ready(function () {

    jq2("#popup").click(function () {
        jq2("#modal").fadeToggle();
    });

    // Highlight active widget
    jq2(".widget").click(function () {
        jq2(".widget").css("background", "#f4f4f4");
        jq2(this).css("background", "#d3ffd3");
    });

    // Tooltip
    jq2(".widget").hover(function () {
        jq2(this).attr("title", "This is a widget tool-tip");
    });

});
