$("document").ready(function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const url = 'https://api.themoviedb.org/3/movie/' + id;
    const key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';

    const recommendations = '/recommendations';
    const credits = '/credits';
    const img = '/images';
    const imgURL = 'https://image.tmdb.org/t/p/w300/';

    const getDetails = url + key;
    const getCredits = url + credits + key;
    const getRecommendations = url + recommendations;
    const getImages = imgURL + img;

    $.getJSON(getImages, function(images) {

        // $(".backdrop img").attr("src", )
    })

    $.getJSON(getDetails, function(details) {
        // movie NAMNE
        $(".movie-name-M").text(details.title);

        // YEAR
        let year = details.release_date;
        $(".year-M").text(year.split("-")[0])

        // RUNTIME
        var runTime = details.runtime;
        const convert = (n) => `0${n / 60 ^ 0}`.slice(-2) + ':' + ('0' + n % 60).slice(-2);
        $(".duration").text(convert(runTime));

        // star rating
        var r = Math.round(details.vote_average);
        var x = r / 2;
        var z = Math.round(5 - x);
        var y = Math.floor(x);

        if (x > 0) {
            for (i = 0; i < y; i++) {
                $(".innerstar-block-M").append(` <div class="inner-block">
            <img src="../img/stars/fullStar.svg" alt="">
        </div>`);
            }
        };
        if (x - y > 0) {
            $(".innerstar-block-M").append(` <div class="inner-block">
             <img src="../img/stars/halfStar.svg" alt="">
             </div>`);
        };

        if (z > 0) {
            if (r % 2 == 0) {
                for (p = 0; p < z; p++) {
                    $(".innerstar-block-M").append(` <div class="inner-block">
            <img src="../img/stars/EmptyStar.svg" alt="">  
            </div>`);
                }
            } else {
                for (p = 0; p < z - 1; p++) {
                    $(".innerstar-block-M").append(` <div class="inner-block">
            <img src="../img/stars/EmptyStar.svg" alt="">  
            </div>`);
                }
            }
        }; //___star rating___

        // GENRES 
        var genres = "";
        for (j = 0; j < details.genres.length; j++) {
            genres += details.genres[j].name + ",";
            $(".genres-text-M").text(genres);
        };
    });

    var castSize = "cast-heigt";
    var divSize = "con-additional-M-height"
    $.getJSON(getCredits, function(credits) {
        // DIRECTOR
        for (i = 0; i < credits.crew.length; i++) {
            if (credits.crew[i].job === "Director") {
                $(".director-M").text(credits.crew[i].original_name);
            }
        }

        // CAST
        var cast = ""
        for (k = 0; k < credits.cast.length; k++) {
            if (k < 13) {
                castSize = "cast-heigt-large";
                divSize = "con-additional-M-height-large";
            }
            cast += credits.cast[k].name + ", ";
            $(".cast-text-M").text(cast);
        }
    });

    // CAST
    $(".view-more-btn").on("click", function() {
        console.log("werk");
        $(".cast-M").toggleClass(castSize);
        $(".con-additional-M").toggleClass(divSize);
        if ($(".view-more-btn p ").text() === "more") {
            $(".view-more-btn p ").text("less");
        } else {
            $(".view-more-btn p ").text("more");
        }
    })



    $(window).scroll(function() { // tablet animation fade in 
        var height = $(window).scrollTop();
        if (height > 20) {
            $(".fade-in").addClass("fade-in-appear ");
            $(".from-bottom").addClass("from-bottom-appear");
        } else if (height = 20) {
            $(".fade-in").removeClass("fade-in-appear ");
            $(".from-bottom").removeClass("from-bottom-appear");
        };
    }); //___tablet animation FADE IN___ 


})