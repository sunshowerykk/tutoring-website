<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "tbl_recruit_request".
 *
 * @property integer $id
 * @property string $request_des
 */
class RecruitRequest extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_recruit_request';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'request_des'], 'required'],
            [['id'], 'integer'],
            [['request_des'], 'string', 'max' => 600],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'request_des' => Yii::t('app', '招聘要求'),
        ];
    }
}
