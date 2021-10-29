$(document).ready(function () {
    const base_url = 'https://api.themoviedb.org/3';
    const api_key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';
    const img_url = 'https://image.tmdb.org/t/p/w300/'
    const popular_url = '/movie/popular';
    const genre_url = '/genre/movie/list';
    const url = base_url + popular_url + api_key;

    $.getJSON(url, function (data) {
        for (i = 0; i < 20; i++) {
            if (data.results[i].genre_ids.includes(28)) {
                $(".action-carousel-holder").append(
                    `<div class="carousel-item text-center">
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${img_url + data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${data.results[i].title}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <!-- <a href="" class="button btn btn-primary">More Info</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${img_url + data.results[i + 1].poster_path}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${data.results[i + 1].title}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <!-- <a href="" class="button btn btn-primary">More Info</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${img_url + data.results[i + 2].poster_path}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${data.results[i + 2].title}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <!-- <a href="" class="button btn btn-primary">More Info</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${img_url + data.results[i + 3].poster_path}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${data.results[i + 3].title}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <!-- <a href="" class="button btn btn-primary">More Info</a> -->
                                </div>
                            </div>
                        </div>
                    </div>`
                );
            };

            $('.action-carousel-holder').children().first().addClass('active');
        };
    })

    var myCarousel = document.querySelector('#action-contoller')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: false,
        wrap: false,
        pause: true
    });
});

function calculate_stars() {
    var rating = 9; //get information from the API
    var starRating = rating / 2;
    var k = Math.round(starRating);
    var f = Math.floor(starRating);
    var half = false;
    for (r = 0; r < 5; r++) {
        if (r < k - 1) {
            $(".block").append(` <div class="inner-block">
        <img src="img/fullStar.svg" alt="">
        </div>`)
        } else if (!half) {
            half = true;
            $(".block").append(` <div class="inner-block">
            <img src="img/halfStar.svg" alt="">
            </div>`)
        } else {
            $(".block").append(` <div class="inner-block">
            <img src="img/EmptyStar.svg" alt="">  
            </div>`)
        } // add ../ before the img/EmptySt...
    }
}