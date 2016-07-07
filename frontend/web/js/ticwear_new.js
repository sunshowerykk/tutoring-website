$(function(){

    var unslider = $('.slider-bar').unslider({
        speed:500,
        nav:false,
        arrows:false,
        autoplay:true,
        dots:true
    });
    unslider.on('unslider.change', function(event, index, slide) {
        $('.pagination-bar em').removeClass('current');
        $('.pagination-bar em:nth-of-type(' + (index + 1) + ')').addClass('current');
    });
    $('.pagination-bar em').click(function(){
        var index = $(this).index();
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        $('.unslider-wrap').animate({left:(-(index*100))+"%"});
    });
});