$(function(){
	function erweiShow(){
		var erwei_li=$(".list_title .icon"),
			erwei_img = $(".list_title img"),
			winWidth=$(window).width(),
			erwei_con=$(".list_content ul");
		erwei_li.on('click',function(){
			$(this).addClass("selected").siblings().removeClass('selected');
			erwei_con.eq(erwei_li.index(this)).fadeIn().siblings().fadeOut();
		});	
	}erweiShow();
});




