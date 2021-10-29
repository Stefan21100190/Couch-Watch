$(document).ready(function() {
    console.log("Doc Ready");

    $(".add button").on("click", function() {
        console.log("lekker");
    })



    $(".movie-container").append(`<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
    <div class="card">
        <div class="img_con">
            <img src="" class="card-img-top img-fluid" alt="">
        </div>  
        <div class="card-body">
            <h5 class="movie-title"></h5>
            <div class="buttons">
                <div class="like button"></div>
                <a href="/pages/individualM.html" class="info"><div>More Info</div></a>
            </div>
        </div>
    </div> <!-- card -->
</div>`)
})

$(function() {
    // checking session storage. 

    var test = sessionStorage.getItem("username");

    if (test === null) {
        window.location.href = "../pages/login.html";
    }
})