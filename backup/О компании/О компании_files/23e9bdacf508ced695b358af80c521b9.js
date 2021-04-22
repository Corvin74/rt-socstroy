$(document).ready(function(){

    function stepcontsixSlider() {
        $(".stepcontsix-content").slick({
            dots: true,
            arrows: true,
            dotsClass: 'stepcontsix-dots',
            slidesToShow: 1,
            variableWidth: true,
            draggable: true,
            infinite: false,
            centerMode: true,
            initialSlide: 1,
            speed: 800,
            responsive: [
                {
                    breakpoint: 1650,
                    settings: {
                       initialSlide: 0
                    }
                },
                 {
                    breakpoint: 768,
                    settings: {
                        variableWidth: false,
                        centerMode: false,
                        initialSlide: 0
                    }
                }
            ]
        }); 
    }

    stepcontsixSlider();
   
});
