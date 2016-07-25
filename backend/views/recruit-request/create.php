<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\RecruitRequest */

$this->title = Yii::t('app', 'Create Recruit Request');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Recruit Requests'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="recruit-request-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
