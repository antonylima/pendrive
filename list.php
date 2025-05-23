<?php
$files = scandir("uploads");
$files = array_diff($files, array('.', '..'));
echo json_encode(array_values($files));
?>
