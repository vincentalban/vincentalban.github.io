$('img').each(function() {
    $(this)[0].oncontextmenu = function() {
        alert('Contact Vincent Alban for raw image data.');
        return false;    
    };
});

var vh = $( window ).height()/100;
var navOpened = false;

function openNav() {
    $("#mobile-nav-extension").height(8*vh);
    navOpened = true;
}

function closeNav() {
    $("#mobile-nav-extension").height(0);
    navOpened = false;
}

$('.mobile-button-menu').click(function() {
    if (navOpened) {
        closeNav();
    } else {
        openNav();
    }
});