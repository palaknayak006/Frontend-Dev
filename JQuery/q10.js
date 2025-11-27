$(document).ready(function () {

    let usedEmails = ["test@mail.com", "student@gmail.com"];

    $("#submit").click(function () {

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let pass = $("#password").val();

        let valid = true;

        $("input").removeClass("error");
        $("#msg").text("");

        // 1. Check name not empty
        if (name === "") {
            $("#name").addClass("error");
            valid = false;
        }

        // 2. Check email format + uniqueness
        let emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/;

        if (!emailPattern.test(email) || usedEmails.includes(email)) {
            $("#email").addClass("error");
            valid = false;
        }

        // 3. Check password length
        if (pass.length < 8) {
            $("#password").addClass("error");
            valid = false;
        }

        // 4. Success message
        if (valid) {
            $("#msg").text("Registration Successful ✔").addClass("success");
        }

    });

});
