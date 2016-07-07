var goldActive = {//section-touch show
  screenWidth : $(window).width(),
  init: function(){
    var self = this;
    if(self.screenWidth > 640){
      self.touchShow();
      self.btnActive();
    }
    self.listTab();
    self.firstSection();
    self.scrollHidden();
    self.androidIosData();
  },
  touchShow: function(){//touch part show
    var self = this;
    $('.section-config-touch li p').each(function(){
      $(this).on('mouseenter',function(){
        $(this).siblings('dl').fadeIn();
      });
      $(this).parent('li').on('mouseleave',function(){
          $(this).find('dl').fadeOut();
      });
    });
  },
  btnActive: function(){//button click
    var self = this;
    $('.section-more-btn').addClass('on');
    $('.section-more-btn').toggle(
      function(){
        $(this).find('i').text('-');
        $(this).find('span').addClass('on');
        $('#section-more').show();
        var btn_top = $('.section-more-btn').offset().top;
        $('body,html').animate({scrollTop:btn_top-60},500);
      },
      function(){
        $(this).find('i').text('+');
        $(this).find('span').removeClass('on');
        $('#section-more').hide();
      }
    );
  },
  listTab: function(){//config list show
    $('.section-more-tit li.tab').each(function(index){
      $(this).on('click',function(){
        $(this).addClass('on').siblings('.tab').removeClass('on');
        $('.section-more-txt ul').eq(index).show().addClass('on').siblings().hide();
      });
    });
  },
  firstSection: function(){//first section full screen
    var screen_height = $(window).height()-110;
    $('#section-welcome,.section-welcome-bg,#section-welcome .s-inner').height(screen_height+110);
  },
  scrollHidden: function(){//navigation scroll
    var scroll_top;
    var timer = 0;
    $(window).scroll(function(){
      if(timer){
        clearTimeout(timer);
        timer = 0;
      }
      timer = setTimeout(function(){
        scroll_top = $(window).scrollTop();
        if(scroll_top > 60){
          $("#header").animate({top:-60});
          $(".ticwatch_pro").animate({top:-60});
          $("#w_g_header").animate({top:0});
        }else{
          $("#header").animate({top:0},500);
          $(".ticwatch_pro").animate({top:60},500);
          $("#w_g_header").animate({top:-60},500);
        }
      },200);
    });
  },
  androidIosData: function(){
    var data = [{
      'desc':'Android 4.3及以上，支持蓝牙稳定连接',
      'icon':'android_m.png',
      'list':[
        '消息推送',
        '一键寻找手机',
        '来电提醒',
        '手表录音功能',
        '使用手表扬声器进行通话',
        '音乐控制器',
        '语音打车',
        '设置日程',
        '手表拨号',
        '查看日历',
        '专属内置表盘',
        '设置秒表',
        '短信回复',
        '设置闹钟',
        '微信回复（需开启Android Wear<sup>TM</sup>兼容模式）',
        'OTA在线升级',
        '内置表盘',
        '抬手亮屏',
        '第三方表盘及应用',
        '手势控制',
        '中文语音搜索及控制',
        'WIFI功能',
        '即时翻译',
        '微信运动',
        '导航（与第三方合作）',
        '搜狗号码通来电显示',
        '记步功能',
        'QQ密友',
        '心率检测',
        '智能家居操控'
      ]
    },{
      'desc':'iOS 8.0及以上，支持蓝牙稳定连接',
      'icon':'ios_m.png',
      'list':[
        '消息推送',
        '一键寻找手机',
        '来电提醒',
        '手表录音功能(无法同步到手机)',
        '使用手表扬声器进行通话',
        '音乐控制器',
        '语音打车',
        '设置日程',
        '手表拨号',
        '查看日历',
        '专属内置表盘',
        '设置秒表',
        '内置表盘',
        '设置闹钟',
        '使用手表扬声器进行通话',
        '中文语音搜索及控制',
        'OTA在线升级',
        '即时翻译',
        '抬手亮屏',
        '手势控制',
        '心率检测',
        'WIFI功能',
        '微信运动'
        ]
    }];
    for(var i in data){
      var this_box = $('.section-more-txt');
      this_box.append($('<ul class="on">'));
      this_box.find('ul').eq(i).append('<p class="icon"><img src="../static/img/ticwatch-gold/'+ data[i].icon +'"></p>');
      this_box.find('ul').eq(i).append($('<p>').append(data[i].desc));
      for(var j in data[i].list){
        this_box.find('ul').eq(i).append('<li><strong>·</strong>'+data[i].list[j]+'</li>');
      }
    }
    if($(window).width() > 640){
      $('.section-more-txt ul').eq(1).removeClass('on');
    }
  }
}