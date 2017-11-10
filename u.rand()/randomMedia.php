<?php

	include 'u.rand()/mediaFunctions.php';

	$media = randomMedia();
	$mediaName = $media[0];
	$mediaType = $media[1];

	echo "$mediaName | ";
	echo "($mediaType)type";

?>
