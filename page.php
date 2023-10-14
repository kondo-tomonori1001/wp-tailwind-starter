<?php
// テンプレートがあるかをチェック
$url = $_SERVER['REQUEST_URI'];
$url = explode('?', $url);
$url = $url[0];

$path = get_template_directory() . '/pages' . substr($url, 0, strlen($url) - 1) . '.php';
if (file_exists($path)) {
  include($path);
  exit();
}


// index.phpを付加して検索
$path = get_template_directory() . '/pages' . $url . 'index.php';
if (file_exists($path)) {
  include($path);
  exit();
}
