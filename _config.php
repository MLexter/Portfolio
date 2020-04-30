<?php

/*** SETTINGS ***/
ini_set('display_errors', 'on');
error_reporting(E_ALL);


class AutomaticLoading
{
    public static function start()
    {
        spl_autoload_register(array(__CLASS__, 'autoload'));

        $root = $_SERVER['DOCUMENT_ROOT'];
        $host = $_SERVER['HTTP_HOST'];

        define('HOST', 'http://' . $host . '/Lexter/Lexter_Perso/');
        define('ROOT', $root . '/Lexter/Lexter_Perso/');
	
        define('ASSETCSS',   HOST . 'public/assets/css/');
        define('ASSETJS',    HOST . 'public/assets/js/');
    }

}
