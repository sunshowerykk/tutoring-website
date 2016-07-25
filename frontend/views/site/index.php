<?php

use yii\helpers\Url;
use frontend\assets\AppAsset;

AppAsset::addCss($this,'@web/css/ticwear_new.css');
AppAsset::addCss($this,'@web/css/unslider.css');

$this->title = Yii::t('app', 'Ticwatch2 - 问问手表_中文语音交互智能手表');
?>
<div class="slider-bar">
    <ul>
        <li>
            <a href="https://ticwatch.tmall.com/p/rd004132.htm" target="_blank">
                <img src="<?= Url::to('@web/img/new_banner1.jpg', true) ?>" border="0"/>
            </a>
        </li>
        <li>
            <a href="/ticmirror/">
                <img src="<?= Url::to('@web/img/new_banner2.jpg', true) ?>" border="0"/>
            </a>
        </li>
    </ul>
    <div class="pagination-bar">
        <em class="current"></em>
        <em></em>
    </div>
</div>
<div class="index-bottom">
    <div class="ticwatch">
        <a href="https://ticwatch.tmall.com/p/rd004132.htm" target="_blank">
            <img src="<?= Url::to('@web/img/new_ll.jpg', true) ?>" alt=""/> 
        </a>
    </div>
    <div class="ticmirror">
        <a href="http://www.sojump.hk/jq/8359788.aspx" target="_blank">
            <img src="<?= Url::to('@web/img/new_mm.jpg', true) ?>" alt=""/> 
        </a>
    </div>
    <div class="ticwatch2">
        <a href="http://www.chumenwenwen.com/h5/app_download/index.html" target="_blank">
            <img src="<?= Url::to('@web/img/new_rr.jpg', true) ?>" alt=""/> 
        </a>
    </div>
</div>
<script type="text/javascript" src="<?= Url::to('@web/lib/unslider-min.js', true)?>"></script>
<script type="text/javascript" src="<?= Url::to('@web/js/ticwear_new.js', true)?>"></script>