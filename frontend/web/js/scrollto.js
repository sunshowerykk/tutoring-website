$(function(){
    jQuery.scrollto = function(scrolldom,scrolltime) {
        $(scrolldom).click( function(){ 
            var scrolltodom = $(this).attr("date-scroll");
            $(this).addClass("thisscroll").siblings().removeClass("thisscroll");
            $('html,body').animate({
                scrollTop:$(scrolltodom).offset().top},scrolltime
            );
            return false;
        }); 
        
    };
    $.scrollto(".downbtn a",500);
});