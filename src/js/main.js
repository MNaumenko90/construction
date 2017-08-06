//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/foundation-sites/dist/js/foundation.js
//= ../../bower_components/slick-carousel/slick/slick.js
//= ../../bower_components/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js


/*
 * Custom
 */
 $(".slider, .slider2, .slider3, .slider4, .slider5").slick({});

 $(document).ready(function(){
 	$('.slider-item').addClass('slick-first-load');
 	$('body').click(function() {$('.slider-item').removeClass('slick-first-load');})
 	$('.gold, .animate, img').not('.noAnimate, .photo-image').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });

    $('#main-nav li').on('click', function(event) {
        if ($(this).has('ul').length) {
            // event.preventDefault();                       //menu
            $(this).toggleClass('drop');
            $(this).mouseleave(function(event) {
                $(this).removeClass('drop')
            })
        }
    });

        $('.card-menu li a').on('click', function(event) {
                        event.preventDefault();
                        $('.card-menu li a').removeClass('active');
                        $(this).addClass('active');
                        $('.slider5').slick('slickGoTo', $(this).data('slide'));
                    });
        $('.dots-new li a').on('click', function(event) {
                        event.preventDefault();
                        $('.dots-new li a').removeClass('active');
                        $(this).addClass('active');
                        $('.slider3').slick('slickGoTo', $(this).data('slide'));
                    });

     $('.styled-checkbox').on('click',  function(event) {
    event.preventDefault();
    $(this).toggleClass('checked');
    var input = $(this).find('input')
    if (input.attr('checked')) {
     input.removeAttr('checked')
    } else {
     input.attr('checked', 'checked')
    }
   });
 });
 $(document).foundation();
