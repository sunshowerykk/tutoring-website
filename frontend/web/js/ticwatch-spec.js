var spec = {
    paramValEl: '.param-val',
    paramEl: '.param',
    specEl: '.spec',
    readmoreBtn: '.readmore',
    watchTableEl: '.watch-table',
    init: function(){
        var self = this;
        if ($(window).width() > 800) {
            self.paramSlide();
            self.specSlide();
        }
        self.urlLoad();
        self.clickLoad();
    },
    urlLoad: function(){
        var self = this;
        var pageUrl=window.location.href;
        if(pageUrl.indexOf("#")>-1){
            $(".watch-table .inner").show();
        }
    },
    clickLoad:function(){
        var self = this;
        $(".clickLoad").on("click",function(){
            $(".watch-table .inner").show();
        });
    },
    paramSlide: function(){
        var self = this;
        $(self.paramEl).find(self.readmoreBtn).on('click',function(){
            var paramTop = $(self.paramEl).offset().top;
            var $this = $(this);
            if ($this.hasClass('active')) {
                $(self.paramValEl).slideUp('slow', function(){
                    $this.removeClass('active');
                });
            } else {
                $this.addClass('active');
                $(self.paramValEl).slideDown('slow');
            }
            $('html,body').animate({scrollTop:paramTop}, 'slow');
        });
    },
    specSlide: function(){
        var self = this;
        $(self.specEl).find(self.readmoreBtn).on('click',function(){
            var tableTop = $(self.watchTableEl).offset().top;
            var $this = $(this);
            if ($(this).hasClass('active')) {
                $(self.watchTableEl).find('.inner').slideUp('slow', function(){
                    $this.removeClass('active');
                });
            } else {
                $(this).addClass('active');
                $(self.watchTableEl).find('.inner').slideDown('slow');
                $('html,body').animate({scrollTop:tableTop - 20}, 'slow');
            }
        });
    }
};
spec.init();