$(function(){
	var watchLi = $(".watch_list li"),
		imgLi = $(".watch_imglist li"),
		imgLiHeight=imgLi.height();
		$(window).resize(function() {
			imgLi = $(".watch_imglist li"),
			imgLiHeight=imgLi.height();
			$(".watch_imglist").css("height",imgLiHeight);
		});	
	function imgShow(){
		watchLi.on('click',function(){
			$(this).addClass("selected").siblings().removeClass();
			imgLi.eq(watchLi.index(this)).fadeIn().siblings().fadeOut();
		});	
	}
	function curColor(i){
		watchLi.eq(i).addClass("selected").siblings().removeClass();
		imgLi.eq(i).fadeIn().siblings().fadeOut();
	}
	function toColor(){
		var url = window.location.href;
		if(url.indexOf("#black")!=-1){
			curColor(0);
		}else if(url.indexOf("#brown")!=-1){
			curColor(1);
		}else if(url.indexOf("#silvery")!=-1){
			curColor(2);
		}else if(url.indexOf("#gray")!=-1){
			curColor(3);
		}
	}
	imgShow();
	toColor();
});