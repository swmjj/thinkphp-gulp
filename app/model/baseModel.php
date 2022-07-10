<?php
namespace app\model;

use app\helper\EsHelper;
use app\plug\PubPlug;
use think\facade\Db;
use think\Model;

class baseModel extends Model
{
    //添加或者更新数据
    public static function add($table_field,$data,$id)
    {
        $data_=self::getDbData($table_field,$data);
        //插入数据
        if(!empty($data_))
        {
            if(!$id)
            {
                if(!$data["addtime"]==-1)
                {
                    $data_["addtime"]=date("Y-m-d H:i:s");
                }
                self::insert($data_);
                return self::getLastInsID();
            }
            else
            {
                $result=self::update($data_,"id='{$id}' ");
                return $id;
            }
        }
        else
        {
            return false;
        }
    }

    public static function getDbData($table_field,$data)
    {
        //过滤数据
        $data_=array();
        foreach ($data as $k=>$v)
        {
            if(!isset($table_field[$k])) continue;
            $data_[$k]=htmlspecialchars($v);
        }
        return $data_;
    }

    public static function getList($where,$page,$pagesize,$order,$field="*")
    {
        $list=self::where($where)->field($field)->order($order)->limit($page*$pagesize,$pagesize)->select()->toArray();
        return $list;
    }

    //统计总数量
    public static function getCount($where)
    {
        $count=self::where($where)->count();
        return $count;
    }
}
