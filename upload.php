<?php
if (!empty($_FILES['files'])) {
    foreach ($_FILES['files']['tmp_name'] as $key => $tmp_name) {
        $file_name = $_FILES['files']['name'][$key];
        move_uploaded_file($tmp_name, "uploads/" . $file_name);
    }
     echo "<script>alert('Upload realizado!')</script>";
    }

else{

    }
?>

