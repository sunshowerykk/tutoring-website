$(function(){
	/*video hide show*/
	function videoShow(){
		video_li.on('click',function(){
			$(this).addClass("selected").siblings().removeClass();
			video_con.eq(video_li.index(this)).fadeIn().siblings().fadeOut();
			video_con.eq(video_li.index(this)).trigger('play').siblings().trigger('pause');	 
		});	
	}
	function link(i){
		video_con.eq(i).fadeIn().siblings().fadeOut();
		video_con.eq(i).trigger('play').siblings().trigger('pause');	 
	}

	function videoLink(){
	var url=window.location.href;
		video_li=$(".videolist li");
		video_con=$(".video_conlist video");
		videoShow();
		if(url.indexOf("#desc")!=-1){
			link(0);
		}else if(url.indexOf("#design")!=-1){
			link(1);
		}else if(url.indexOf("#pub")!=-1){
			link(2);
		}
	}	
	videoLink();	
	/*video move*/
	function videoMove(){
		var videoLi = $(".videolist li"),
			videoUl = $(".videolist ul");
		   var scrollFunc = function (e) {
	        var direct = 0;
	        e = e || window.event;
	        if (e.wheelDelta) {              
	            if (e.wheelDelta > 0) { 
	                videoLi.stop().animate({marginLeft:"6%",marginRight:"6%"});
	            }
	            if (e.wheelDelta < 0) { 
	               videoLi.stop().animate({marginLeft:"0px",marginRight:"0px"});
	            }
	        } else if (e.detail) { 
	            if (e.detail> 0) { 
	                videoLi.stop().animate({marginLeft:"0px",marginRight:"0px"});
	            }
	            if (e.detail< 0) {
	                videoLi.stop().animate({marginLeft:"6%",marginRight:"6%"});
	            }
	        }
	    }
	    if (document.addEventListener) {
	        document.addEventListener('DOMMouseScroll', scrollFunc, false);
	    }
	    window.onmousewheel = document.onmousewheel = scrollFunc;  
	}
	videoMove();
});




