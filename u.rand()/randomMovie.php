<?php

	include 'u.rand()/mediaFunctions.php';

	$media = randomMovie();
	$mediaName = $media[0];
	$mediaType = $media[1];

	$vimeoID = "https://vimeo.com/user53920855";

	echo "<iframe class='movie' src='$mediaName' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";

?>
