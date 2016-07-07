var video = {
    init:function(){
        var self = this;
        self.__scrollEvent();
        self.__videoLayout();
    },
    __scrollEvent:function(){
        var self = this;
        var windowHeight = $(window).height();
        var everyTransform;
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();

            var times = windowHeight / scrollTop;
            var everyBlur = 20 / times;
            var everyScale = 1 + (0.1 / times);
            everyTransform = 0 - times;
            if($(window).width()>800){
                self.__fadeOut(scrollTop);
            }
            if (everyBlur >= 20) {
                everyBlur = 20;
            }
            if (everyScale >= 1.09) {
                everyScale = 1.09;
            }
            $(".ticwatch-pro").css({
                 '-webkit-filter': 'blur(' + everyBlur + 'px)',
                 '-webkit-transition':'all .6s linear',
                 '-webkit-transform':'scale3d('+ everyScale +','+ everyScale +',1)'
            });
        });
    },
    __fadeOut:function(scrollTop){
        var y_pos = 600 - parseInt(scrollTop);
        if(y_pos>-200){
            $('.watch').css({
                transform: 'translate3d(0px, '+y_pos+'px, 0px)'
            })
        }else{
            var _opt = ((scrollTop-600)/600).toFixed(1);
            var opt = 1-_opt;
            $('.watch').css({
                opacity:opt
            });
        }

        //首屏淡出
        if(scrollTop<300){
            var _opt = 1-(scrollTop/300).toFixed(1);
            var _opt1 = 1-(scrollTop/100).toFixed(1);
            $('._find').css({
                opacity:_opt
            });
            $('.row').css({
                opacity:_opt1
            });
        }else if(scrollTop<600) {
            var _opt = ((scrollTop-200)/300).toFixed(1);
            $('.watch').css({
                opacity:_opt
            })
        }

    },
    __videoLayout:function(){
        $(".lineblock a").on('click',function(){
            var videoRel = $(this).attr("rel");
            var thisEle = $(".video_layout");
            thisEle.show();
            thisEle.find("video").attr('src',videoRel);
            thisEle.find("video").trigger('play');
            $("body,html").addClass('hidden');
        });
        $(".video_close").on('click',function(){
            $(".video_layout").hide();
            $("body,html").removeClass('hidden');
            $("video").trigger('pause');
        });
    }

};
video.init();