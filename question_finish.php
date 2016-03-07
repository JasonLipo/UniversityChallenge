<?php

$filename = "status.txt";
$lastmodif = filemtime($filename);
$currentmodif = filemtime($filename);

while ($currentmodif == $lastmodif) {
	usleep(10000);
	clearstatcache();
	$currentmodif = filemtime($filename);
}
?>