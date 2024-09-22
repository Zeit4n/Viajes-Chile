$(document).ready(function(){


    $('.navbar a').mouseenter(function() {
        $(this).addClass('text-primary fw-bold');
    });

    $('.navbar a').mouseleave(function() {
        $(this).removeClass('text-primary fw-bold');
    });

    });