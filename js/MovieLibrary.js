$(document).ready(function() {
    
    const base_url = 'https://api.themoviedb.org/3';
    const api_key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';
    const img_url = 'https://image.tmdb.org/t/p/w300/'
    const popular_url = '/movie/popular';
    const genre_url = '/genre/movie/list';
    const url = base_url + popular_url + api_key;

    console.log(base_url + genre_url + api_key);
    console.log(url);


    $.getJSON(url, function(data){
        console.log(data);

        for(i = 0 ; i < 20; i++){

            $(".action-movies").append(

                `<div class="col-lg-3 col-md-4 col-sm-12 my-2 item">
                    <div class="card">
                        <div class="img_con">
                            <img src="${img_url+data.results[i].poster_path}" class="img-fluid" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="movie-title">${data.results[i].title}</h5>
                            <div class="side-buttons">
                                <div class="like button"></div>
                            </div>
                        </div>
                    </div>
                </div>`
            );

        };
    })
    
    

    

})