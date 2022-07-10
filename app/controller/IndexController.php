<?php

namespace app\controller;

use app\model\test;
use JasonGrimes\Paginator;
use think\facade\View;
use think\Request;

class IndexController
{
    public function __construct()
    {
        $controller = Request()->controller();
        $action = Request()->action();
        View::assign([
            'action'  => $action,
            'controller'  => $controller,
        ]);
    }

    //首页
    public function indexAction()
    {
        return View::fetch('index', [
            "name" => "123123",
            "name2" => "sfoipo"
        ]);
    }
    //兑换
    public function exchangeAction()
    {
        return View::fetch('exchange');
    }

    //支付页面
    public function orderAction()
    {
        return View::fetch('order');
    }

    //支付页面
    public function payAction()
    {
        return View::fetch('pay');
    }

    // 授权页面
    public function authAction()
    {
        return View::fetch('auth');
    }

    // 静态测试
    public function testAction()
    {
        return View::fetch('menu');
    }
}