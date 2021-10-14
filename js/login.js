$("document").ready(function() {
    $(".knoppie-log-in").on("click", function() {
        $(".knoppie-log-in").fadeOut("500ms", "linear");
        $(".red").toggleClass("red-slide");
        $(".form-container").slideUp();
        $(".knoppie-sing-up").show();
    })
    $(".knoppie-sing-up").hide();
    $(".knoppie-sing-up").on("click", function() {

        $(".knoppie-sing-up").fadeOut("500ms", "linear");
        $(".knoppie-log-in").fadeIn("500ms", "linear");
        $(".red").toggleClass("red-slide");
        $(".form-container").slideDown();
    })
})