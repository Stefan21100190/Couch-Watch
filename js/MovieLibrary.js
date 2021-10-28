$(document).ready(function() {
    
    const base_url = 'https://api.themoviedb.org/3';
    const api_key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';
    const img_url = 'https://image.tmdb.org/t/p/w300/'
    const popular_url = '/movie/popular';
    const genre_url = '/genre/movie/list';
    const url = base_url + popular_url + api_key;
    const topRatedUrl = base_url + '/movie/top_rated' + api_key;

    $.getJSON(url, function(data){
        console.log(data);

        for(i = 0 ; i < 20; i++){

            if(data.results[i].genre_ids[0] === 28){

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
                                    <a href="/pages/individualM.html" class="info"><div>More Info</div></a>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
            }

            if(data.results[i].genre_ids[0] === 12){

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
                                    <a href="/pages/individualM.html" class="info"><div>More Info</div></a>
                                </div>
                            </div>
                        </div> <!-- card -->
                    </div>`
                );
                
            }

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

    $.getJSON(topRatedUrl, function(result){
        console.log(result);

        for(i = 0 ; i < 20; i++){

            $(".top-rated").append(

                `<div class="item col-lg-3 col-md-6 col-sm-12 my-2">
                    <div class="card">
                        <div class="img_con">
                            <img src="${img_url+result.results[i].poster_path}" class="card-img-top img-fluid" alt="">
                        </div>  
                        <div class="card-body">
                            <h5 class="movie-title w-100">${result.results[i].title}</h5>
                            <div class="buttons">
                                <div class="like button"></div>
                                <a href="/pages/individualM.html" class="info"><div>More Info</div></a>
                            </div>
                        </div>
                    </div> <!-- card -->
                </div>`
            );
            
        }

        

    })
    

    return full_html;
})