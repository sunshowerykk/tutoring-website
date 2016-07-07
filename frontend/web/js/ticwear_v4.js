var screenHeight=$(window).height();
var screenWidth=$(window).width();
function divHeight(){
    if(screenWidth>800){
        $(".section-ui,.gesture,.intelligent-push,.section-store,.section-bodyBuild").height(screenHeight);
    }
}
function slider(){
     var unslider = $('.func').unslider({
         nav:false,
         arrows:false,
         autoplay:true
     });
     $('.prev').click(function(){
         unslider.unslider('prev');
     });
     $('.next').click(function(){
         unslider.unslider('next');
     });
}
function watchScroll(){
    var allW = 0,
        lis = $('.section-list ul li');
    lis.each(function(i,v){
        allW += parseInt($(v).find('p').width());
    });
    $('.section-list ul').width(allW+1);
    var topScroll = new IScroll('.box-top',{
        scrollX: true,
        scrollY: false,
        scrollbars:false,
        preventDefault:true
    });
    var downScroll = new IScroll('.box-down',{
        scrollX: true,
        scrollY: false,
        scrollbars:false,
        preventDefault:true
    });
}
function listAnimate(){
    var scrollTop;
    var divHeight=$(".section-list .top").height();
    var topDiv=$(".section-list .top").offset().top-divHeight;
    var downDiv=$(".section-list .down").offset().top-divHeight;
    var leftValue=screenWidth/4;
    $(".topUl,.downUl").css("left",screenWidth+"px");
    $(window).scroll(function(){
        scrollTop=$(window).scrollTop();
        if(scrollTop>=topDiv){
            $(".topUl").animate({"left":leftValue+"px"},1000);
            //$(".arrow-btn").animate({"opacity":0},8000);
        }
        if(scrollTop>=downDiv){
            $(".downUl").animate({"left":leftValue+"px"},1000);
            //$(".arrow-btn").animate({"opacity":0},8000);
        }
    });
}
function banner(){
    if(screenWidth>800){
        var bgBanner=$("#banner-web");
    }else{
        var bgBanner=$("#banner-mobile");
    }
    var value=60;
    $(window).scroll(function(){
        if($(window).scrollTop()>bgBanner.height()+value){
            bgBanner.hide();
        }else{
            bgBanner.show();
        }
    });
}
function intelligentPush(){
    if ($('.airport').css('opacity') == 1) {
        $('.airport').animate({opacity:0}, 1500);
        $('.weather').animate({opacity:1}, 1500);
    } else {
        $('.airport').animate({opacity:1}, 1500);
        $('.weather').animate({opacity:0}, 1500);
    }
}

function androidSwitch(){
    $(".section-tit li").click(function(){
        var num=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".section-txt>div").eq(num).show().siblings().hide();
        $(".supp-txt").show();
    });
}
/*ui dial animate*/
var curIndex=0;
var $dialEle=$(".interface .watch li");
var $txtEle=$(".interface .text li");
var $tab=$(".ui-inner .tab li");
function slideAnimate(){
    if(curIndex>=0 && curIndex<5){
        slideHide();
        var status = $dialEle.eq(curIndex).attr('status');
        $dialEle.eq(curIndex).addClass("dial-active").siblings().removeClass("dial-active");
        var currDial=$(".dial-active");
        dialSlide(currDial,status);
        curIndex++;
    }else{
        curIndex=0;
    }
}
function slideHide(){
    if($dialEle.hasClass("dial-active")){
        var lastEle=$(".dial-active");
        var lastStatus=lastEle.attr("status");
        if(lastStatus==1){//right slide
            lastEle.removeClass("right-slide").addClass("right-initial");
        }else if(lastStatus==2){//up slide
            lastEle.removeClass("up-slide").addClass("up-initial");
        }else if(lastStatus==3){//down slide
            lastEle.removeClass("down-slide").addClass("down-initial");
        }else if(lastStatus==4){//left slide
            lastEle.removeClass("left-slide").addClass("left-initial");
        }else{//press
            lastEle.removeClass("press-animate").addClass("press-initial");
        }
    }
}
function dialSlide(ele,status){
    var index=ele.index();
    if(status==1){//right slide
        ele.removeClass("right-initial").addClass("right-slide");
    }else if(status==2){//up slide
        ele.removeClass("up-initial").addClass("up-slide");
    }else if(status==3){//down slide
        ele.removeClass("down-initial").addClass("down-slide");
    }else if(status==4){//left slide
        ele.removeClass("left-initial").addClass("left-slide");
    }else{//press
        $(".interface .watch").css("backgroundColor","#1d1e1f");
        ele.removeClass("press-initial").addClass("press-animate");
    }
    $txtEle.eq(index).fadeIn().siblings().fadeOut();
    $tab.eq(index).addClass("active").siblings().removeClass("active");
}
var timer=setInterval(slideAnimate,3000);
function clickSlide(){
    $(".ui-inner .tab li").on("click",function(){
        clearInterval(timer);
        slideHide();
        curIndex=$(this).index();
        $dialEle.eq(curIndex).addClass("dial-active").siblings().removeClass("dial-active");
        var status = $dialEle.eq(curIndex).attr('status');
        var currDial=$(".dial-active");
        dialSlide(currDial,status);
        slideAnimate();
        timer=setInterval(slideAnimate,3000);
    });
}

/*语音搜索表盘切入动画*/
var index=0;
if(screenWidth>800){
    var $img = $(".web-show .search-watch-img>li");
    var $text=$(".web-show .search-text>li");
}else{
    var $img = $(".mobile-show .search-watch-img>li");
    var $text=$(".mobile-show .search-text>li");
}
var len = $img.size();
function voiceSearchAnimate(){
    if(index<(len-1)){
        if($img.hasClass("search-active")){
            $(".search-watch-img>li[class='search-active']").css({
                '-webkit-transition': 'all .3s ease-in',
                '-webkit-transform': 'translateX(0)',
                '-moz-transition': 'all .3s ease-in',
                '-moz-transform': 'translateX(0)',
                'transition': 'all .3s ease-in',
                'transform': 'translateX(0)'
            });
        }
        $img.eq(index).css({
            '-webkit-transition': 'all .3s ease-in .2s',
            '-webkit-transform': 'translateX(-100%)',
            '-moz-transition': 'all .3s ease-in .2s',
            '-moz-transform': 'translateX(-100%)',
            'transition': 'all .3s ease-in .2s',
            'transform': 'translateX(-100%)',
        });
        $img.eq(index).addClass("search-active").siblings().removeClass("search-active");
        $text.eq(index).show().siblings().hide();
        index++;
    }else{
        index=0;
    }
    
}
setInterval(voiceSearchAnimate,4000);

/*secondary menu load*/
function menuLoad(){
    var parameter=location.hash;
    var $menu=$(".menu");
    if(parameter){
        $menu.eq(0).hide();
        $menu.eq(1).show();
    }else{
        $menu.eq(1).hide();
        $menu.eq(0).show();
    }
}

/*video control*/
if ($(window).width() >= 800) {
    videoPlay('.particual-video');
    videoPlay('.dialog-video');
}
$(window).resize(function(){
    if ($(window).width() >= 800) {
        videoPlay('.particual-video');
        videoPlay('.dialog-video');
    }
});
function videoPlay(ele){
    var videoSrc = $(ele).attr('rel');
    $(ele).attr('src', videoSrc);
}

$(function(){
    divHeight();
    slider();
    watchScroll();
    banner();
    listAnimate();
    androidSwitch();
    slideAnimate();
    clickSlide();
    menuLoad();
    setInterval(intelligentPush, 8000);
});
