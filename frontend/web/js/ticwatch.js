/*nkn*/
function curIndex(){
  $("#header").animate({top:0});
	$("#w_header").animate({top:-60});
  $(".ticwatch_pro").animate({top:60});
  setTimeout(function(){
    $(".back").animate({left:'-60px'},500)
  });
}
function noIndex(){
  $("#header").animate({top:-60});
  $("#w_header").animate({top:0});
  $(".ticwatch_pro").animate({top:-50});
  setTimeout(function(){
    $(".back").animate({left:'0px'},500);
    $(".back").css('display','block');
  },300);
}

/*video*/
$(function(){
  var fpH = $(".section_08 .slide li img").height(),
      winHeight=$(window).height();
  $(".scroll").css({"height":fpH});
  $(".video_box").on('click',function(){
    $(this).hide();
  });  

});


