<!doctype html>
<html>

	<head>
		<meta charset="UTF-8">
		<?php include 'style/cssLinks.php';?>
		<?php include 'style/fonts.php';?>
		<title>
			<?php echo 'PWR DOOR PRODUCES';?>
		</title>
	</head>

	<header>
		<figure> <!--absolute position-->
			<img id="logo" src="images/logo.png" onmouseover="this.src='images/logo_hover.png';" onmouseout="this.src='images/logo.png';" onclick="pwrClick();" alt="pwrdoor.com"/>
		</figure>
	</header>

	<body>

		<?php include 'nav.php';?>

		<canvas id="terminal"></canvas>

		<div id="debug">
		</div>

		<?php include 'u.rand()/scriptLinks.php';?>

	</body>

</html>
