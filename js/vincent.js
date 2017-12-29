$(document).ready(function(){
    if ($(window).width() < 768) {
        $('.owl-carousel').owlCarousel({
            items:1,
            center:true,
            lazyLoad:true,
            nav: true,
            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        })
    } else {
        $('.owl-carousel').owlCarousel({
            items:2,
            center:true,
            lazyLoad:true,
            nav:true,
            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            loop: true
        })
    }
});

$(document).keydown( function(eventObject) {
if(eventObject.which==37) {//left arrow
$('.owl-prev').click();//emulates click on prev button
} else if(eventObject.which==39) {//right arrow
$('.owl-next').click();//emulates click on next button
}
} );
