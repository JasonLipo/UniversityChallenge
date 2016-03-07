<?php
session_start();
$a = file_get_contents("buzz.txt");
if ($a == "") {
	file_put_contents("buzz.txt", $_SESSION['user']);
}
?>