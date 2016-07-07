var goldRight=parseInt($(".gold-watch img").css("right"));
var whiteLeft=parseInt($(".white-watch img").css("left"));
var whiteBottom=parseInt($(".white-watch img").css("bottom"));
var blackLeft=parseInt($(".black-watch img").css("left"));
var blackTop=parseInt($(".black-watch img").css("top"));
//var dis=5;
var windowHeight=$(window).height();
var screenWidth=$(window).width();
var $sectionEle=$(".section-watch,.section-advantage,.section-personality,.section-type,.section-tide");
function divHeight(){
    $(".section-make,.section-watch,.section-advantage").height(windowHeight-60);
    $sectionEle.height(windowHeight);
    $(".gold-watch").height(windowHeight);
    $(".white-watch,.black-watch").height(windowHeight/2);
}
function goldMove(temp,dis){
    var $element=$(".gold-watch img");
    var value=-192;
    if(temp){//down
        if(goldRight<=0){
            goldRight+=dis;
            $element.animate({'right':goldRight+'px'},0);
        }else{
            $element.animate({'right':0},0);
        }
    }else{//up
        if(goldRight>=value){
            goldRight-=dis;
            $element.animate({'right':goldRight+'px'},0);
        }else{
            $element.animate({'right':value+'px'},0);
        }
    }
}
function whiteMove(temp,leftdis,bottomdis){
    var $element=$(".white-watch img");
    var leftValue=-213;
    var bottomValue=-367;
    if(temp){//down
        if(whiteLeft<=0 && whiteBottom<=0){
            whiteLeft+=leftdis;
            whiteBottom+=bottomdis;
            if (whiteLeft > 0 ) {
                whiteLeft = 0;
            }
            if (whiteBottom > 0 ) {
                whiteBottom = 0;
            }
            $element.animate({'left':whiteLeft+'px'},0);
            $element.animate({'bottom':whiteBottom+'px'},0);
        }else{
            $element.animate({'left':0},0);
            $element.animate({'bottom':'-80px'},0);
        }
    }else{//up
        if(whiteLeft>=leftValue && whiteBottom>=bottomValue){
            whiteLeft-=leftdis;
            whiteBottom-=bottomdis;
            if (whiteLeft < -213 ) {
                whiteLeft = -213;
            }
            if (whiteBottom < -367 ) {
                whiteBottom = -367;
            }
            $element.animate({'left':whiteLeft+'px'},0);
            $element.animate({'bottom':whiteBottom+'px'},0);
        }else{
            $element.animate({'left':leftValue+'px'},0);
            $element.animate({'bottom':bottomValue+'px'},0);
        }
    }
}
function blackMove(temp,leftdis,topdis){
    var $element=$(".black-watch img");
    var leftValue=-211;
    var topValue=-424;
    var leftMove,topMove;
    if(temp){//down
        if(blackLeft<=0){
            blackLeft+=leftdis;
            blackTop+=topdis;
            if (blackLeft > 0 ) {
                blackLeft = 0;
            }
            if (blackTop > 0 ) {
                blackTop = 0;
            }
            $element.animate({'left':blackLeft+'px'},0);
            $element.animate({'top':blackTop+'px'},0);
        }else{
            $element.animate({'left':0},0);
            $element.animate({'top':'-125px'},0);
        }
    }else{//up
        if(blackLeft>=leftValue){
            blackLeft-=leftdis;
            blackTop-=topdis;
            if (blackLeft < -211) {
                blackLeft = -211;
            }
            if (blackTop < -424) {
                blackTop = -424;
            }
            $element.animate({'left':blackLeft+'px'},0);
            $element.animate({'top':blackTop+'px'},0);
        }else{
            $element.animate({'left':leftValue+'px'},0);
            $element.animate({'top':topValue+'px'},0);
        }
    }
}
function mouseMove(){
    /*var initTop=0;
    var $whiteEle=$(".white-watch img");
    var $blackEle=$(".black-watch img");
    var sectionTypeTop=$(".section-advantage").offset().top;
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        var temp=scrollTop>initTop?true:false;
        if(scrollTop>=sectionTypeTop && screenWidth>800){
            goldMove(temp);
            whiteMove(temp);
            blackMove(temp);
            initTop=scrollTop;
        }
    });*/
    var initTop=0;
    var heightV;
    var goldDis;//gold watch translate distance
    var whiteLeftDis;//white watch translate distance
    var whiteBottomDis;//white watch translate distance
    var blackLeftDis;//black watch translate distance
    var blackTopDis;//black watch translate distance
    var divTop=$(".section-type").offset().top;
    var divHeight=$(".section-type").height();
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        heightV=scrollTop-divTop;
        goldDis=heightV/divHeight*192;
        console.log("goldDis="+goldDis);
        whiteLeftDis=heightV/divHeight*213;
        whiteBottomDis=heightV/divHeight*367;
        blackLeftDis=heightV/divHeight*211;
        blackTopDis=heightV/divHeight*424;
        var temp=scrollTop>initTop?true:false;
        if(scrollTop>divTop && screenWidth>800){
            goldMove(temp,goldDis);
            whiteMove(temp,whiteLeftDis,whiteBottomDis);
            blackMove(temp,blackLeftDis,blackTopDis);
            initTop=scrollTop;
        }
    });
}
$(function(){
    $(window).scroll(function(){
        scrollT=$(window).scrollTop();
        menuSwtich();
    });
    divHeight();
    mouseMove();
});