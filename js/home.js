$(function () {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=4d51cad1f6d8c339de5671b9d1223770';

    $.getJSON(url, function (result) {
        var container = $('.movie-container');
        result.results.forEach((element, index, item) => {
            var html = `<div class="col-lg-3 col-md-6 col-sm-12 my-2">
            <div class="card">
                <div class="img_con">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" class="card-img-top img-fluid" alt="">
                </div>
                <div class="card-body">
                    <h5 class="movie-title w-100">${element.title}</h5>
                    <div class="side-buttons">
                        <div class="movie-dropdown button"></div>
                        <div class="add button"></div>
                        <div class="like button"></div>
                    </div>
                    <!-- <a href="" class="button btn btn-primary">More Info</a> -->
                </div>
            </div> <!-- card -->
        </div>`;

            container.append(html);
        });
    });
});