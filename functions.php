<?php
// assetsの読み込み
function scripts_init()
{
  $dir = get_template_directory_uri();
  $ver = '0.0.0';
  wp_enqueue_style('my-scripts', $dir . '/assets/styles/style.css');
  wp_enqueue_script('my_script', $dir . '/assets/scripts/main.js', array(), $ver, true);
}
add_action('wp_enqueue_scripts', 'scripts_init');
