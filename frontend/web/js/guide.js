var layout = {
　　init:function(){
		this.videoLayout();
	},
	videoLayout:function(){
		$(".lineblock a,.lineblock_2 a").on('click',function(){
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
