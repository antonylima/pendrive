<?php
if (isset($_GET['file'])) {
    $file = "uploads/" . basename($_GET['file']);
    if (file_exists($file)) {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file) . '"');
        readfile($file);
        //unlink($file);
        exit;
    }
}
?>
