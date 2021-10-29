$("document").ready(function() {



    // Log in & Sign up toggle 
    $(".knoppie-log-in").hide();
    $(".knoppie-log-in").on("click", function() {
        $(".knoppie-log-in").fadeOut("500ms", "linear");
        $(".red").toggleClass("red-slide");
        $(".form-container").slideUp();
        $(".knoppie-sing-up").show();
    })

    $(".knoppie-sing-up").on("click", function() {

        $(".knoppie-sing-up").fadeOut("500ms", "linear");
        $(".red").toggleClass("red-slide");
        $(".form-container").slideDown();
        $(".knoppie-log-in").fadeIn("500ms", "linear");
    }); //___Log in & Sign up toggle___

    // Authentication for log in info
    $(".log-in-from-btn").on("click", function() {

        var username = $(".username").val();
        var password = $(".password").val();

        for (i = 0; i < userInfo.length; i++) {

            if (username === userInfo[i].username) {
                if (password === userInfo[i].password) {
                    if (userInfo[i].account === true) {
                        window.location.href = "../home.html";
                        sessionStorage.setItem("username", username);
                        sessionStorage.setItem("password", password);
                        break;
                    } else {
                        $(".username").val("your account has been suspended")
                        $("input.username").css("background-color", "rgba(240, 149, 149, 0.562)");
                        $("input.password").css("background-color", "rgba(240, 149, 149, 0.562)");
                    }
                } else {
                    console.log("your username and password does not match");
                    $(".username").val("your username and password does not match")
                    $("input.username").css("background-color", "rgba(240, 149, 149, 0.562)");
                    $("input.password").css("background-color", "rgba(240, 149, 149, 0.562)");
                }
            } else {
                $(".username").val("your username and password does not match");
                $("input.username").css("background-color", "rgba(240, 149, 149, 0.562)");
                $("input.password").css("background-color", "rgba(240, 149, 149, 0.562)");
                $(".password").val("");
            }
        };
    });

    $(".username").on("click", function() {
        $(".username").val("");
        $("input.username").css("background-color", "rgb(255, 255, 255)");
        $("input.password").css("background-color", "rgb(255, 255, 255)");
    }); //___authentication___
})