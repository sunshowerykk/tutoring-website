$(function(){
    var bigAngleTop=$(".big-angle").offset().top;
    var windowWidth = $(window).width();

    if (windowWidth >= 800) {
        videoPlay('.hardcore-video', '.hardcore');
        videoPlay('.voice-control-video', '.voice-control');
    }
    $(window).resize(function(){
        if ($(window).width() >= 800 && $('.hardcore-video').attr('src') === '') {
            videoPlay('.hardcore-video', '.hardcore');
            videoPlay('.voice-control-video', '.voice-control');
        }
    });
    $(window).scroll(function(){
        var wheight=$(window).scrollTop();
        if(wheight>=60){
            $(".common-head").stop().animate({"top":"-60px"},0).addClass('box-hide');
            $(".mirror-menu").stop().animate({"top":"0px"},200);
        }else{
            $(".mirror-menu").stop().animate({"top":"-60px"},0);
            if ($(".common-head").hasClass('box-hide')) {
                $(".common-head").removeClass('box-hide');
            } else {
                $(".common-head").stop().animate({"top":"0px"},200).removeClass('box-hide');
            }
        }
    });
    $(window).scroll(function() {
        var wheight=$(window).scrollTop();
        var screenHeight=$(window).height();
        var eleTop=bigAngleTop-screenHeight/4;
        /*big angle animate*/
        if(wheight>=eleTop){
            $(".mask-layer").addClass("active");
        }
    });
    function videoPlay(ele, parents){
        var vheight=$(parents).offset().top;
        var videoSrc = $(ele).attr('rel');
        $(ele).attr('src', videoSrc);
        $(window).scroll(function() {
            if($(ele).hasClass("pause")){
                return ;
            }
            var wheight=$(window).scrollTop();
            if (wheight>=vheight) {
                $(ele)[0].play();
                $(ele).addClass("pause");
            }
        });

    }

    // video control
    var videoLayoutEl = '._video-layout';
    var videoBoxEl = '._video-box';
    var videoEl = $(videoBoxEl).find('video').get(0);
    $('._video-btn').on('click', function(){
        var videoUrl = $(this).attr('video-url');
        $(videoEl).attr('src', videoUrl);
        $(videoLayoutEl + ',' + videoBoxEl).show();
        videoEl.play();
        videoEl.currentTime = 0;
    });
    $('._close-video-btn').on('click', function(){
        $(videoLayoutEl + ',' + videoBoxEl).hide();
        videoEl.pause();
    });

});