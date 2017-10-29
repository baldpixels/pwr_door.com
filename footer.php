<?php

	include 'functions/footerFunctions.php';

	$ip = catchIP();
	$footerText = randomFooter();

	$rand = rand(0,9);

	if ($rand==0) {
		echo "<p>&#34;HIDE YOUR NUMBERS! <a href=''>$ip</a>&#34;</p>";
	}
	else {
		echo "<p>$footerText</p>";
	}

?>
