$(document).ready(function () {
    // 1. Click on product → highlight background (add class)

    $(".product").click(function () {

        // Check stock first
        let stock = $(this).data("stock");

        if (stock === "out") {
            alert("This product is OUT OF STOCK!");
            return;
        }

        $(".product").removeClass("highlight");
        $(this).addClass("highlight");
    });

    // 2. Hover → show additional details using .hover()

    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    // 3. Favorite icon click → toggles `.selected` class

    $(".favorite").click(function (event) {
        event.stopPropagation();   // avoid triggering product click
        $(this).toggleClass("selected");
    });

    // 4. Style discounted products using attribute selector
    //    Already handled in CSS with:
    //    .product[data-discount="true"]

    // 5. Alert if product is OUT OF STOCK (using data attribute)
    //    Already handled inside product click above

});
