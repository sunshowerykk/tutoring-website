var ticwatchActive={
    screenWidth:$(window).width(),
    scroll_top:$(window).scrollTop(),
    init:function(){
        var pageUrl=window.location.href;
        var isEn=pageUrl.indexOf("/en/");
        var self=this;
        self.bannerH();
        self.liWidth();
        self.scrollHidden();
        self.styleScroll();
        self.androidSwitch();
        if(isEn<=-1){
            self.divAnimate();
        }
        self.data();
    },
    bannerH : function(){
        var self=this;
        if(self.screenWidth>800){
            $(".section-banner").height($(window).height());
        }
    },
    liWidth:function(){
        var self=this;
        var watchListBoxEl = '.mobile-watch-list';
        var watchListEl = watchListBoxEl + ' .watch-list';
        var watchTypeEl = watchListBoxEl + ' .watch-type';
        if(self.screenWidth<=800){
            $(watchListEl).find("ul li").width(self.screenWidth/2);
            $(watchListEl).find("ul li").eq(0).css("marginLeft",(self.screenWidth/4)+"px");
        }
    },
    scrollHidden:function(){
        var self=this;
        var ticwatchEl=".ticwatch-buy";
        $(window).scroll(function(){
            if($(window).scrollTop()>60){
                $(ticwatchEl).addClass("active");
            }else{
                $(ticwatchEl).removeClass("active");
            }
        });
    },
    styleScroll:function(){
        var self=this;
        $(".section-banner span").click(function(){
            $('html,body').stop(true);
            $('html,body').animate({scrollTop: $('._section-style').offset().top-60});
        });
    },
    androidSwitch:function(){
        var self=this;
        if(self.screenWidth>800){
            $(".section-android-ios ul .tab").click(function(){
                var num=$(this).index();
                $(this).find("div").addClass("on").end().siblings().find("div").removeClass("on");
                $(".section-txt ul").eq($(this).index()).css("display","block");
                $(".section-txt ul").not($(".section-txt ul").eq($(this).index())).css("display","none");
            });
        }
    },
    divAnimate:function(){
        var self=this;
        var sectionParamEl=".section-param div";
        var toppos=0;
        $(window).scroll(function(){
            var eleTop = $(".section-param").offset().top+527;
            var scrolls = $(window).scrollTop();
            if(eleTop >= scrolls && eleTop < (scrolls+$(window).height())){
                if(scrolls>toppos){
                    $(sectionParamEl+':nth-of-type(1) img,'+sectionParamEl+':nth-of-type(2) img').removeClass('up');
                    $(sectionParamEl+':nth-of-type(1) img,'+sectionParamEl+':nth-of-type(2) img').addClass('down');
                    $(sectionParamEl+':nth-of-type(3) img').removeClass('up');
                    $(sectionParamEl+':nth-of-type(3) img').addClass('down');
                    $(sectionParamEl+':nth-of-type(4) img').removeClass('up');
                    $(sectionParamEl+':nth-of-type(4) img').addClass('down');
                }else{
                    $(sectionParamEl+':nth-of-type(1) img,'+sectionParamEl+':nth-of-type(2) img').removeClass('down');
                    $(sectionParamEl+':nth-of-type(1) img,'+sectionParamEl+':nth-of-type(2) img').addClass('up');
                    $(sectionParamEl+':nth-of-type(3) img').removeClass('down');
                    $(sectionParamEl+':nth-of-type(3) img').addClass('up');
                    $(sectionParamEl+':nth-of-type(4) img').removeClass('down');
                    $(sectionParamEl+':nth-of-type(4) img').addClass('up');
                }
            }
            toppos=scrolls;
        });
    },
    data:function(){
        var watchColor = 'ticwatchGold';
        var bandColor = '0';
        var kind = 'ticwatchGold';
        ticwatch={
            colorChoiceEl: '._style-choice',
            init:function(){
                var self = this;
                self._loadData();
            },
            _loadData:function(){
                var self = this;
                var pageUrl=window.location.href;
                var isEn=pageUrl.indexOf("/en/");
                var urlLink;
                if(isEn>-1){
                    urlLink="/en/static/data/ticwatch.json";
                }else{
                    urlLink="/static/data/ticwatch.json";
                }
                $.ajax({
                    type:"get",
                    url:urlLink,
                    dataType:"json",
                    cache:false,
                    success:function(data){
                        $('._section-style-detail').html(template('sectionStyleDetailTpl', data[watchColor].watch[bandColor]));
                        if(data[watchColor].watch[bandColor].kind=="ticwatchSilver" ||data[watchColor].watch[bandColor].kind=="ticwatchGold"){
                            $(".detail-show .name").append("&nbsp;&nbsp;<img src='/static/img/ticwatch-new/iphone-con.png'/>");
                            if(isEn>-1){
                                $("#detail ul").append("<li>Ticwatch joined MFi Program.</li>")
                            }else{
                                $("#detail").append("<p>此系列Ticwatch通过苹果官方MFi认证。</p>");
                            }
                        }
                        //change the dots width
                        if(data[watchColor].watch[bandColor].wimage.length==2){
                            $('.pagination-bar').addClass('on');
                        }
                        //other type choice
                        kind = $('._more-choice').attr('data-kind');
                        var moreData={};
                        moreData.data=[];
                        for(var key in data){
                           if(key!=kind){
                                var temp={};
                                temp.titlesrc=data[key].imglittlesrc;
                                temp.bandImage=data[key].watch[0].bimage;
                                temp.kind=key;
                                moreData.data.push(temp);
                           }
                        }
                        $('._more-choice').html(template('moreChoiceTpl', moreData));
                        $(self.colorChoiceEl + ' li').eq(bandColor).addClass("active");
                        $('._pagination-bar em').eq(0).addClass('current');
                        self._initEvent(data);
                        //pictures switch
                        var unslider=$("._img-show").unslider({
                            nav:false,
                            arrows:false,
                            autoplay:true,
                            dots:true
                        });
                        unslider.on('unslider.change', function(event, index, slide) {
                            $('._pagination-bar em').removeClass('current');
                            $('._pagination-bar em:nth-of-type(' + (index + 1) + ')').addClass('current');
                        });
                        //定位点控制图片轮播
                        $('._pagination-bar em').on('click',function(){
                            var index=$(this).index();
                            $(this).addClass('current');
                            $(this).siblings().removeClass('current');
                            $('.unslider-wrap').animate({left:(-(index*100))+"%"});
                        });
                    },
                    error:function(){
                         console.log("error");
                    }
                });
            },
            _initEvent:function(data){
                var self=this;
                $(self.colorChoiceEl + ' ._current li').on('click', function(){
                    var colorIndex = $(this).attr('data-index');
                    bandColor = colorIndex;
                    self._loadData();
                });
                $(self.colorChoiceEl + ' ._other li').on('click',function(){
                    watchColor=$(this).attr('data-type');
                    bandColor=$(this).attr('data-index');
                    self._loadData();
                });
                $('._more-btn').on('click',function(){
                    watchColor=$(this).attr("watchKind");
                    bandColor = '0';
                    self._loadData();
                    $('html,body').stop(true);
                    $('html,body').animate({scrollTop: $('._section-style-detail').offset().top-60}); 
                });
                $('._watch-more-btn').on('click',function(){
                    $('._more-choice').toggle();
                    $(this).find("img").toggleClass("img-active");
                });
            }
        };
           ticwatch.init();
     }
}