<?php
session_start();
file_put_contents("status.txt", $_POST['text']);
?>