<?php
use yii\helpers\Html;
use yii\helpers\Url;
use frontend\assets\AppAsset;

AppAsset::register($this);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="Ticwatch 2,智能手表,出门问问，问问手表，安卓,iOS" />
    <meta name="description" content="Ticwatch2问问手表是新一代人工智能语音交互智能手表。Ticwatch2由北欧设计师打造外观，至简设计。Ticwatch跨界李晨主理品牌NPC MLGB推出定制潮牌Ticwatch2。Ticwatch2可以实现接打电话、接收推送、运动信息检测等功能，可以Android及iOS手机系统兼容。" />
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <link rel="icon" type="image/ico" href="favicon.ico"/>
    <?php $this->head() ?>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-64695573-2', 'auto');
          ga('send', 'pageview');
                  
        function goTo(url){
            var ua = navigator.userAgent;
            if(ua.indexOf('MSIE')>=0){
                var rl = document.createElement('a');
                rl.href= url;
                document.body.appendChild(rl);
                rl.click();
            }else{
                location.href = url;
            }
        }
        function getReferer(){
            if(document.referrer){
                return document.referrer;
            }else{
                return false;
            }
        }        
        if (getReferer()) {
            var referrer = getReferer();
            var isIndexOf = referrer.indexOf('bzclk.baidu.com') > -1 || referrer.indexOf('www.baidu.com/baidu.php') > -1 || referrer.indexOf('?word=') > -1;
            if(isIndexOf){
                ga('send', 'event','baidu_to_jd','click');
                goTo('https://ticwatch.tmall.com/p/rd004132.htm');
            }
        }
    </script>
</head>
<body>
    <div class="common-head">
        <div id="header">
            <div class="h-inner">
                <div id="nav1_s">
                    <ul>
                        <li><a href="/ticwear.html">TICWEAR</a></li>
                        <li style="font-size:12px;text-indent:12px;"><a href="/ticwatch2/">TICWATCH2</a></li>
                        <li style="font-size:12px;text-indent:12px;"><a href="/ticwatch/ticwatch.html">TICWATCH</a></li>
                        <li style="font-size:12px;text-indent:12px;"><a href="/ticwear/ticwear4.html#">TICWEAR智能手表操作系统</a></li>
                        <li><a href="http://www.ticwear.com/ticmirror/index.html">TICMIRROR</a></li>
                        <li><a href="http://bbs.ticwear.com/forum.php" target="_blank">TIC论坛</a></li>
                        <li><a href="https://ticwatch.tmall.com/p/rd004132.htm" target="_blank">在线购买</a></li>
                        <li><a href="/aboutUs.html">关于我们</a></li>
                    </ul>
                </div>
                <div id="logo">
                    <a href="/ticwear.html" target="_parent">
                        <img src="<?= Url::to('@web/img/logo.png', true); ?>"/>
                    </a>
                </div>
                <div id="nav2">
                    <ul>
                       <li class="bdsharebuttonbox shareicon">
                        <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                        <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                    </li>
                    <li class="share"></li>
                    <script>
                       window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
                       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                      ga('create', 'UA-64695573-1', 'auto');
                      ga('send', 'pageview');
                  </script>
                  <style type="text/css">
                    .bdshare-button-style1-32 a{
                        margin:0px 5px;
                        float:left;
                        width: 28px;
                        height: 28px;
                        text-align: center;
                        padding-left: 5px;
                    }
                    .bdshare-button-style1-32 .bds_tsina{
                        background: url(<?= Url::to('@web/img/weibo_s.png', true); ?>)  
                        center no-repeat;
                        background-size: 28px auto;
                    }
                    .bdshare-button-style1-32 .bds_weixin{
                        background: url(<?= Url::to('@web/img/weixin_s.png', true); ?>) 
                        center no-repeat;
                        background-size: 28px auto;
                    }
                    .bdshare-button-style1-32 .bds_tsina:hover{
                        background: url(<?= Url::to('@web/img/weibo_s.png', true); ?>) 
                        center no-repeat;
                        background-size: 28px auto;
                    }
                    .bdshare-button-style1-32 .bds_weixin:hover{
                        background: url(<?= Url::to('@web/img/weixin_s.png', true); ?>)
                        center no-repeat;
                        background-size: 28px auto;
                    }
                </style>
            </ul>
            <div class="language en" id="switch"></div>
            <div class="split-line"></div>
            <div class="cmww"><a href="http://www.chumenwenwen.com" target="_blank">
            <img src="<?= Url::to('@web/img/cmww.png', true); ?>"/>
            </a></div>
        </div>
        <div id="nav1">
            <ul>
                <li class="_ticwear"><a href="/ticwear.html">TICWEAR</a></li>
                <li><a href="/ticmirror/">TICMIRROR</a></li>
                <li><a href="http://bbs.ticwear.com/forum.php" target="_blank">TIC论坛</a></li>
                <li><a href="https://ticwatch.tmall.com/p/rd004132.htm" target="_blank">在线购买</a></li>
                <li><a href="/aboutUs.html">关于我们</a></li>
            </ul>
        </div>
        <div id="nav1_sbtn">
            <div class="language en" id="switch"></div>
            <p><img src="http://ticwear.com//static/img/s_menu.png" alt="" /></p>
        </div>
    </div>
</div>
<div class="hover-content _hover-content">
    <div class="div-menu">
        <a href="/ticwatch2/index.html" class="new_ticwatch2">
            <img src="<?= Url::to('@web/img/new_ticwatch2.png', true); ?>" alt="ticwatch2">
        </a>
        <a href="/ticwatch/ticwatch.html" class="new_ticwatch">
            <img src="<?= Url::to('@web/img/new_ticwatch.png', true); ?>" alt="ticwatch">
        </a>
        <a href="/ticwear/ticwear4.html#ticwear" class="new_ticwear">
            <img src="<?= Url::to('@web/img/ticwear/ticwear.png', true); ?>" alt="智能手表操作系统">
            <span>智能手表操作系统</span>
        </a>
    </div>
</div>
</div>
<?=$content?>

<div class="common-foot">
    <div id="footer">
        <div class="footer-url">
            <dl>
                <dt>产品及服务</dt>
                <dd><a href="/ticwatch2/">Ticwatch 问问手表</a></dd>
                <dd><a href="/ticmirror/">Ticmirror 问问魔镜</a></dd>
                <dd><a href="/ticwear/ticwear4.html">Ticwear 智能手表操作系统</a></dd>
                <dd><a href="http://www.chumenwenwen.com/h5/app_download/index.html" target="_blank">问问智能手表应用商店</a></dd>
                <dd><a href="http://store.ticwear.com/" target="_blank">Tic·在线商城</a></dd>
            </dl>
            <dl>
                <dt>支持</dt>
                <dd><a href="http://ticwear.com/ticwatch/guide_2.html" target="_blank">Ticwear4.0 视频指导</a></dd>
                <dd><a href="http://ticwear.com/ticwatch/guide.html">Ticwear 使用指导</a></dd>
                <dd><a href="http://store.ticwear.com/pages/download" target="_blank">Ticwear 手机助手</a></dd>
                <dd><a href="http://store.ticwear.com/pages/aftersales" target="_blank">售后政策</a></dd>
            </dl>
            <dl>
                <dt>社区及开发</dt>
                <dd><a href="http://bbs.ticwear.com/forum.php" target="_blank">Tic 论坛</a></dd>
                <dd><a href="http://developer.chumenwenwen.com/" target="_blank">问问开发者平台</a></dd>
            </dl>
            <dl>
                <dt>关于我们</dt>
                <dd><a href="../aboutUs.html#contact_us">联系我们</a></dd>
                <dd><a href="http://chumenwenwen.com/site/service.html" target="_blank">服务声明</a></dd>
                <dd><a href="http://chumenwenwen.com/" target="_blank">出门问问</a></dd>
            </dl>
            <div class="footer-contact">
                <span class="tel">400-883-8390</span>
                <span class="time">周一至周日 9:00-21:00</span>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="footer-text">
                Copyright © <span id="this_year"></span> Mobvoi, Inc. All Rights Reserved.&nbsp;北京羽扇智信息科技有限公司  京ICP备14058077号-1  <a href="http://chumenwenwen.com/site/service.html" target="_blank">服务声明</a>
            </div>
        </div>
    </div>
</div>
<script>
  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,"script","//www.google-analytics.com/analytics.js","ga");
 ga("create", "UA-64689193-1", "auto");
 ga("send", "pageview");
</script>
<div style="display:none">
    <script type="text/javascript" src="http://s19.cnzz.com/z_stat.php?id=1252939802&show=pic1"></script>
    <script>
  //buy link count
  function shopClick(pro) {
      if(navigator.userAgent.indexOf("UCBrowser") > -1) {
          if(pro == 'ticwatch'){
              window.location.href="http://store.ticwear.com/";
          }else{
              window.location.href="https://izhongchou.taobao.com/dreamdetail.htm?spm=0.0.0.0.zJtEt2&id=10047375&";
          }
      }else{
          if(pro == 'ticwatch'){
              _czc&&_czc.push(["_trackEvent", "ticwatch", "shop-click", ""]);
              window.location.href="http://store.ticwear.com/";
          }else{
              _czc&&_czc.push(["_trackEvent", "ticwatch-gold", "shop-click", ""]);
              window.open("https://detail.tmall.com/item.htm?spm=0.0.0.0.cPgWUD&id=524700673643&sku_properties=149238345:962164731");
          }
      }
  }
  
</script>
<script language="javascript" type="text/javascript" src="http://js.users.51.la/17737104.js"></script>
<noscript>
    <a href="http://www.51.la/?17737104" target="_blank">
      <img alt="&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;" src="http://img.users.51.la/17737104.asp" style="border:none" />
  </a>
</noscript>
<script language="javascript" type="text/javascript" src="http://js.users.51.la/17833566.js"></script>
<noscript>
    <a href="http://www.51.la/?17833566" target="_blank"><img alt="&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;" src="http://img.users.51.la/17833566.asp" style="border:none" /></a>
</noscript>
<script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?9903b088357366e6615a9af14b5396fc";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
</script>
<script>
  var new_date = new Date();
  document.getElementById('this_year').innerHTML = new_date.getFullYear();
</script>
</div>
</body>
</html>