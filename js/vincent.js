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
