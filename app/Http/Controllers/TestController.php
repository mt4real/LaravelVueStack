<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function testController(){

    	//return view('welcome');

    	return response()->json([
          'msg'=>'we should return only json'
          
    	]);
    }
}
