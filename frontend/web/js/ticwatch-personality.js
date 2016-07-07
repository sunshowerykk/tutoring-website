$(function(){
    var initWidth = 0;
    function _iscroll(ele,parEl){
        initWidth = 0;
        $.each($(ele).find('p'),function(i,val){
            initWidth+=parseInt($(val).width()+6);
        });
        $(parEl).width(initWidth);
    }
    _iscroll('#tab2','._tab2-img');
    _iscroll('#tab3','._tab3-img');
    _iscroll('#tab1','._tab1-img');
    $("._nav li").on('click',function(){
        var idx = $(this).index();
        $(".tab").eq(idx).show().siblings('.tab').hide();
        $(this).addClass('high').siblings().removeClass('high');
        var tab3 = new IScroll('#tab3', {
            scrollX: true,
            scrollY: false,
            preventDefault: true,
            hScrollbar: true
        });
        var tab2 = new IScroll('#tab2', {
            scrollX: true,
            scrollY: false,
            preventDefault: true,
            hScrollbar: true
        });
        var tab1 = new IScroll('#tab1', {
            scrollX: true,
            scrollY: false,
            preventDefault: true,
            hScrollbar: true
        });
    });


















});