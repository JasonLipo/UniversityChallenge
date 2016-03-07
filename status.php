<?php
session_start();
$status = file_get_contents("status.txt");
echo $status;
?>