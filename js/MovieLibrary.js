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
                var poster1 = img_url + data.results[i].poster_path ?? "";
                var poster2 = img_url + data.results[i + 1].poster_path ?? "";
                var poster3 = img_url + data.results[i + 2].poster_path ?? "";

                var title1 = data.results[i].title ?? "";
                var title2 = data.results[i + 1].title ?? "";
                var title3 = data.results[i + 2].title ?? "";

                var vote_average1 = data.results[i].vote_average ?? "";
                var vote_average2 = data.results[i + 1].vote_average ?? "";
                var vote_average3 = data.results[i + 2].vote_average ?? "";

                $(".action-carousel-holder").append(
                    `<div class="carousel-item">
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${poster1}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${title1}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <div class="rating-block" style="display:none;">
                                        ${calculate_stars(vote_average1)}
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${poster2}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${title2}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <div class="rating-block" style="display:none;">
                                        ${calculate_stars(vote_average2)}
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-breaker">
                            <div class="card">
                                <div class="img_con">
                                    <img src="${poster3}" class="card-img-top img-fluid" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="movie-title w-100">${title3}</h5>
                                    <div class="side-buttons">
                                        <div class="movie-dropdown button"></div>
                                        <div class="add button"></div>
                                        <div class="like button"></div>
                                    </div>
                                    <div class="rating-block" style="display:none;">
                                        ${calculate_stars(vote_average3)}
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                );
            };

            $('.action-carousel-holder').children().first().addClass('active');
        };
    });

    var myCarousel = document.querySelector('#action-contoller')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: false,
        wrap: false,
        pause: true
    });

    $(document).on('mouseover', '.movie-title', function () {
        $(this).parent('.card-body').find('.rating-block').show();
    })


    $(document).on('mouseout', '.movie-title', function () {
        $(this).parent('.card-body').find('.rating-block').hide();
    })

    // $('.movie-title').mouseenter(function () {
    //     console.log('akjjhdaskjhd');
    // }).mouseleave(function () {
    //     $('.rating-block').hide();
    // });
});

function calculate_stars(rating) {
    var star_rating_round = Math.round(rating);
    var star_val = star_rating_round / 2;
    var star_rating_floor = Math.floor(star_val);
    var half = Number.isInteger(star_val);

    var full_html = '';

    for (r = 0; r < 5; r++) {
        if (r < star_rating_floor) {
            var html = '<div class="inner-block float-start"><img src="../img/stars/fullStar.svg" height="25" alt=""></div>';
            full_html += html;
        } else if (!half) {
            half = true;
            var html = '<div class="inner-block float-start"><img src="../img/stars/halfStar.svg" height="25" alt=""></div>';
            full_html += html;
        } else {
            var html = '<div class="inner-block float-start"><img src="../img/stars/EmptyStar.svg" height="25" alt=""></div>';
            full_html += html;
        } // add ../ before the img/EmptySt...
    }

    return full_html;
}