<?php

namespace app\controller;

use app\model\test;
use JasonGrimes\Paginator;
use think\facade\View;
use think\Request;

class NewsController
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

    //内页
    public function infoAction()
    {
        return View::fetch('info');
    }
}