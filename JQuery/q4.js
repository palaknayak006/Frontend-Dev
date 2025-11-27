$(document).ready(function () {

    let index = 0;

    // 1. Hide
    $("#hide").click(function () {
        $(".banner").hide();
    });

    // 2. Show
    $("#show").click(function () {
        $(".banner").show();
    });

    // 3. Slide toggle
    $("#slide").click(function () {
        $(".banner").slideToggle();
    });

    // 4. Fade toggle
    $("#fade").click(function () {
        $(".banner").fadeToggle();
    });

    // 5. Auto rotate banners every 5 seconds
    function rotateBanner() {
        let banners = $(".banner");
        banners.hide();  
        $(banners[index]).fadeIn();

        index = (index + 1) % banners.length;
    }

    setInterval(rotateBanner, 5000);
    rotateBanner(); // initial display

});
