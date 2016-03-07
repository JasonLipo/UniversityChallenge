<?php
session_start();
file_put_contents("users.txt", $_POST['text']);
?>