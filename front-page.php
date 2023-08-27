<!DOCTYPE html>
<html lang="ja">
<?php include('components/layout/head/head.php'); ?>

<body>
  <?php include('components/layout/header/header.php'); ?>
  <main>
    <?php include('components/section/top/top-fv.php') ?>
    <section>
      <p>セクション!</p>
      <?php
      $text = "サンプルボタン";
      include('components/common/button/button.php');
      ?>
    </section>
  </main>
  <?php include('components/layout/footer/footer.php'); ?>
</body>

</html>