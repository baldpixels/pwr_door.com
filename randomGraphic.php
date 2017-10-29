<?php 

	include 'functions/mediaFunctions.php';

	$media = randomGraphic();
	$mediaName = $media[0];
	$mediaType = $media[1];

	echo "<img class='graphic' src='graphics/$mediaName' alt='$mediaName' />";

?>