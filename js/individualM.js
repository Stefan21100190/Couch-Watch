$("document").ready(function() {

    // star rating
    var r = 7;
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
    }
    //___star rating___

    // Similar movies & Rocommended movies



    //___Similar movies & Rocommended movies___
    // filling the information


})