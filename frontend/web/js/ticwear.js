/*Dial*/
function scrollDial(){
	var page= 1; 
	var i = 5;
	var boxWidth = $(window).width()*0.6;
	$(".box").css("width",boxWidth);
	var liWidth= boxWidth/5;
	$(".scroll_list li").css("width",liWidth-10);
	$(".next").click(function(){  
		var v_wrap = $(this).parents(".t_inner"); 
		var v_show = v_wrap.find(".scroll_list"); 
		var v_cont = v_wrap.find(".box");
		var v_width = v_cont.width(); 
		var len = v_show.find("li").length;
		var page_count = Math.ceil(len/i);
		if(!v_show.is(":animated")){ 
			if(page == page_count){ 
				v_show.animate({left:'0px'},"slow"); 
				page =1; 
			}else{ 
				v_show.animate({left:'-='+v_width},"slow"); 
				page++; 
			} 
		} 
	}); 
	$(".prev").click(function(){ 
		var v_wrap = $(this).parents(".t_inner");
		var v_show = v_wrap.find(".scroll_list"); 
		var v_cont = v_wrap.find(".box");
		var v_width = v_cont.width(); 
		var len = v_show.find("li").length;
		var page_count = Math.ceil(len/i);
		if(!v_show.is(":animated")){ 
			if(page == 1){ 
				v_show.animate({left:'-='+ v_width*(page_count-1)},"slow"); 
				page =page_count; 
			}else{ 
				v_show.animate({left:'+='+ v_width},"slow"); 
				page--; 
			} 
		} 
	}); 
} 
/*fadein img*/
function fadeinImg(curimg){
	$(window).scroll(function(){
	    if(curimg.offset().top < $(window).height()+$(window).scrollTop()){
			curimg.addClass('fadeinimg');
		}else{
			curimg.removeClass('fadeinimg');
		}
	});
}
/*banner move*/
function moveBanner(){
	var bgBanner = $(".bg_img");
	var bannerH = bgBanner.height();
	$(".bg_bar").css("margin-top",bannerH);	
	$(window).resize(function(){
		$(".bg_bar").css("margin-top",bannerH);			
	});
	$(window).scroll(function(){
		if($("#banner").offset().top < $(window).height()+$(window).scrollTop()){
			var winheight = $(window).scrollTop();
			bgBanner.css({"top":winheight/10});
		}
		if($(window).scrollTop()>bgBanner.height()){
			bgBanner.css("display","none");
		}else{
			bgBanner.css("display","block");
		}
	});
}

$(function(){
	scrollDial();
	moveBanner();
	fadeinImg($('.wear_timeline img'));
	fadeinImg($('.wear_ask .all_inner img'));
	fadeinImg($('.wear_sport h2 img'));
	$(window).resize(function() {
	 	var boxWidth = $(window).width()*0.6;
		$(".box").css("width",boxWidth);
		var liWidth= boxWidth/5;
		$(".scroll_list li").css("width",liWidth-10);
	});
});

