<?php

$filename = "buzz.txt";
file_put_contents("buzz.txt", "");
$lastmodif = filemtime($filename);
$currentmodif = filemtime($filename);

while ($currentmodif == $lastmodif) {
	usleep(10000);
	clearstatcache();
	$currentmodif = filemtime($filename);
}

echo file_get_contents($filename);
file_put_contents("status.txt", "waiting");
file_put_contents("buzz.txt", "");
?>