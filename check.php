<?php
session_start();
$all_users = json_decode(file_get_contents("users.txt"), true);
if (!isset($_SESSION['user'])) {
	$ID = uniqid("", true);
	$_SESSION['user'] = $ID;
	$all_users[$ID] = "";
	file_put_contents("users.txt", json_encode($all_users));
}
else {
	$ID = $_SESSION['user'];
	if (!in_array($ID, array_keys($all_users))) {
		echo "logout";
	}	
}
?>