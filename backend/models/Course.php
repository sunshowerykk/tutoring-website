<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "tbl_course".
 *
 * @property integer $id
 * @property string $course_name
 * @property string $reference
 * @property string $tutor_object
 * @property integer $teacher_id
 * @property integer $status
 */
class Course extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_course';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'course_name', 'tutor_object', 'status'], 'required'],
            [['id', 'teacher_id', 'status'], 'integer'],
            [['course_name', 'reference', 'tutor_object'], 'string', 'max' => 200],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'course_name' => Yii::t('app', '课程名'),
            'reference' => Yii::t('app', '参考书'),
            'tutor_object' => Yii::t('app', '授课对象'),
            'teacher_id' => Yii::t('app', '讲师'),
            'status' => Yii::t('app', '状态'),
        ];
    }
}
