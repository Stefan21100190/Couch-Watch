$(document).ready(function() {

    const base_url = 'https://api.themoviedb.org/3';
    const api_key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';
    const img_url = 'https://image.tmdb.org/t/p/w300/'
    const popular_url = '/movie/popular';
    const genre_url = '/genre/movie/list';
    const url = base_url + popular_url + api_key;
    const topRatedUrl = base_url + '/movie/top_rated' + api_key;


    $.getJSON(url, function(data) {
        console.log(data);

        //append action movies
        for (i = 0; i < 20; i++) {

            if (data.results[i].genre_ids.includes(28)) {
                $(".action-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title w-100">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append action movies


            // append adventure movies
            if (data.results[i].genre_ids.includes(12)) {
                $(".adventure-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append adventure movies


            // append animation movies
            if (data.results[i].genre_ids.includes(16)) {
                $(".animation-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append animation movies


            // append comedy movies
            if (data.results[i].genre_ids.includes(35)) {
                $(".comedy-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append comedy movies


            // append crime movies
            if (data.results[i].genre_ids.includes(80)) {
                $(".crime-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append crime movies


            // append drama movies
            if (data.results[i].genre_ids.includes(18)) {
                $(".drama-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append drama movies


            // append horror movies
            if (data.results[i].genre_ids.includes(27)) {
                $(".horror-movies").append(
                    `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                        <div class="card">
                            <div class="img_con">
                                <img src="${img_url+data.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                            </div>  
                            <div class="card-body">
                                <h5 class="movie-title">${data.results[i].title}</h5>
                                <div class="buttons">
                                    <div class="like button"></div>
                                    <a href="individualM.html?id=${data.results[i].id}" class="info"><div>More Info</div></a>
                                    <div class="rating">${data.results[i].vote_average}</div>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            } //end of append horror movies
            // $('.action-carousel-holder').children().first().addClass('active');


            //FILTERS
            $(".genre-filter").click(function(){

                var genreType = $(this).data("type");
                console.log(type);
            })

        };
    });

    //TRIED MULTI ITEN CAROUSEL

    // var myCarousel = document.querySelector('#action-contoller')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //     interval: false,
    //     wrap: false,
    //     pause: true
    // });

    // $(document).on('mouseover', '.movie-title', function() {
    //     $(this).parent('.card-body').find('.rating-block').show();
    // })


    // $(document).on('mouseout', '.movie-title', function() {
    //     $(this).parent('.card-body').find('.rating-block').hide();
    // })
})

$(function() {
    // checking session storage. 

    var test = sessionStorage.getItem("username");
    console.log(test);

    if (test === null) {
        window.location.href = "../pages/login.html";
    } else {
        console.log("working")
    }
})