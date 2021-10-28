$("document").ready(function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const url = 'https://api.themoviedb.org/3/movie/' + id;
    const key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';

    const recommendations = '/recommendations';
    const credits = '/credits';
    const similar = '/similar'
    const imgBase = 'https://image.tmdb.org/t/p/original';

    const getDetails = url + key;
    const getCredits = url + credits + key;
    const getRecommendations = url + recommendations + key;
    const getSimilar = url + similar + key;



    $.getJSON(getDetails, function(details) {
        // move BACKDROP
        $(".backdrop-img").attr("src", imgBase + details.backdrop_path);

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

        // SYNOPSIS
        $(".synopsis-text-M").text(details.overview);

        // LANGUAGE
        $(".lang-text-M").text(details.original_language);

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
    });
    // SIMILAR
    $.getJSON(getSimilar, function(similar) {
        for (i = 0; i < similar.results.length; i++) {
            $(".similar-movie-container-M").append(`
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
            <a href="../pages/individualM.html?id=${similar.results[i].id}">
                    <div class="card">
                        <div class="img_con">
                            <img src="https://image.tmdb.org/t/p/original${similar.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                        </div>  
                        <div class="card-body">
                            <h5 class="movie-title w-100">${similar.results[i].title}</h5>
                            <div class="side-buttons">
                                <div class="movie-dropdown button"></div>
                                <div class="add button"></div>
                                <div class="like button"></div>
                            </div>
                        </div>
                    </div> <!-- card -->
                </a>
            </div>`)
        }
    })

    $.getJSON(getRecommendations, function(recomm) {
        for (i = 0; i < recomm.results.length; i++) {
            console.log(recomm.results[i].original_title);
            $(".rocomm-movie-container-M").append(`
            <div class="col-lg-3 col-md-6 col-sm-12 my-2">
            <a href="../pages/individualM.html?id=${recomm.results[i].id}">
                    <div class="card">
                        <div class="img_con">
                            <img src="https://image.tmdb.org/t/p/original${recomm.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                        </div>  
                        <div class="card-body">
                            <h5 class="movie-title w-100">${recomm.results[i].title}</h5>
                            <div class="side-buttons">
                                <div class="movie-dropdown button"></div>
                                <div class="add button"></div>
                                <div class="like button"></div>
                            </div>
                        </div>
                    </div> <!-- card -->
                </a>
            </div>`);
        }
    });

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