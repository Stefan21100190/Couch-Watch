$(document).ready(function() {
    
    const base_url = 'https://api.themoviedb.org/3';
    const api_key = '?api_key=4d51cad1f6d8c339de5671b9d1223770';
    const img_url = 'https://image.tmdb.org/t/p/w300/'
    const url = base_url + '/movie/popular' + api_key;

    $.getJSON(url, function(data){
        console.log(data);

        for(i = 0 ; i < 20; i++){

            $(".action-movies").append(

                `<div class="col-lg-3 col-md-4 item">
                    <div class="card">
                        <div class="img_con">
                            <img src="${img_url+data.results[i].poster_path}" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="movie-title">${data.results[i].title}</h5>
                            <div class="side-buttons">
                                <div class="movie-dropdown button"></div>
                                <div class="add button"></div>
                                <div class="like button"></div>
                            </div>
                        </div>
                    </div>
                </div>`

            );
        };
    })
    
    

    

})