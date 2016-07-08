var scrollT;
var winheight = $(window).height();
var winwidth = $(window).width();
/*second menu*/
function menuSwtich(){
    if(scrollT>=105 && $(".menu").length>0){
        $(".common-head").animate({"top":"-60px"},0);
        //$("#header").hide();
        $("#banner-web,#banner-mobile").css("top","45px");
        $(".menu").stop().animate({top:0},30);
        if(winwidth<=800){
            $(".logo-img").show();
            $(".menu-list li").hide();
        }
        $(".logo-img").addClass("active");
        $(".buy").show();
    }else{
        $(".common-head").stop().animate({"top":"0px"},200);
        //$("#header").show();
        $("#banner-web,#banner-mobile").css("top","60px");
        $(".menu").stop().animate({top:60},300);
        if(winwidth<=800){
            $(".logo-img").hide();
            $(".menu-list li").show();
        }
        $(".logo-img").removeClass("active");
        $(".buy").hide();
    }
}

function conBg(){
  $('#item').css("width",winwidth);
  $(".blackbg").css("height",winheight-60);
};
function ShowSmenu(){
  $("#nav1_sbtn img").on('click',function(){
  $(".blackbg").toggle();
  $("#nav1_s").toggle(500);
  });
  $('.blackbg').on('click',function(){
    $(this).hide();
    $("#nav1_s").hide();
  });
}
function Showlilist(){
  $("#nav1_s .dot").on('click',function(){
    $("#nav1_s p").toggle(500);
  });
}
$(document).ready(function(){
  $("#nav1 .list").hover(function(){
    NavHover();
  },function(){
    NavOut();
  });
});
/*search*/
function searchInp(){
  $(".search").on('hover', function(){
    $(".stext").stop().animate({width:'100px'});
    $(".stext").focus();
  }); 
  $(".search").on('mouseleave', function(){
    var sinp = $(".stext");
    if(sinp.val()!==""){
      sinp.stop().animate({width:'100px'});
    }else{
      sinp.stop().animate({width:'1px'});
      sinp.blur();
    }
  }); 
}
/*share*/
function shareIcon(){
  $(".share,.shareicon").hover(function(){
    $(".shareicon").css("display","block");
    $(".shareicon").stop().animate({"width":'90px'},500);
    $(".share").addClass("on");
  },function(){
    $(".shareicon").stop().animate({'width':'-10px'});
    $(".share").removeClass("on");
 }); 
}
/*nav highUrl*/
function highUrl(){
    var pageUrl= window.location.pathname;
    $("#nav1 li").each(function(){
      var hrefUrl = $(this).find("a").attr("href");
      if(pageUrl==hrefUrl && pageUrl!="/en/"){
        $(this).addClass('on').siblings('li').removeClass('on');
      }else{
        $(this).removeClass('on');
      }
    });
    if(pageUrl.indexOf("ticwatch")>-1 || pageUrl.indexOf("ticwear")>-1){
      $("#nav1 li").eq(0).addClass('on').siblings('li').removeClass('on');
    }
}


$(function(){
  $(".common-head").after('<div class="blackbg" ></div>');
  conBg();
  function validataOS(){
    if(navigator.userAgent.indexOf("Mac OS X")>0) {
        $("body").css('font-family','"Helvetica Neue",Helvetica,"Hiragino Sans GB",Arial')
        return "Mac";
    }
  }
  //validataOS();
});

function ticwearMenu(){
  $("._ticwear").add($("._hover-content")).on({
      mouseenter : function(){
        $("._hover-content").stop().slideDown(300);
      },
      mouseleave : function(){
        $("._hover-content").stop().slideUp(300);
      }
  });
}
function pageUrl(){
        highUrl();
        shareIcon();
        ShowSmenu();
        Showlilist();
        searchInp();
        $('.ticwatch_pro').show();
        ticwearMenu();
}
pageUrl();
$(function(){
    $(window).scroll(function(){
        scrollT=$(window).scrollTop();
        menuSwtich();
    });
});