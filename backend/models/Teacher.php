<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "tbl_teacher".
 *
 * @property integer $id
 * @property string $name
 * @property string $tel
 * @property string $res
 */
class Teacher extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_teacher';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'name', 'tel'], 'required'],
            [['id'], 'integer'],
            [['res'], 'string'],
            [['name'], 'string', 'max' => 100],
            [['tel'], 'string', 'max' => 50],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', '姓名'),
            'tel' => Yii::t('app', '手机'),
            'res' => Yii::t('app', '个人简历'),
        ];
    }
}
