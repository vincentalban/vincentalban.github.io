
$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true
    });

    $('#album-button-next').click(function() {
        owl.trigger('next.owl.carousel', [600]);
    })
    // Go to the previous item
    $('#album-button-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [600]);
    })

    $(document).keyup(function(i){
        if(i.keyCode==37) {
            owl.trigger('prev.owl.carousel');
        } else if (i.keyCode==39) {
            owl.trigger('next.owl.carousel');
        }
    });
  });