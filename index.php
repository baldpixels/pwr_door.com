<!doctype html>
<html>

	<head>
		<meta charset="UTF-8">
		<?php include 'style/styleLinks.php';?>
		<?php include 'style/fonts.php';?>

		<link rel="icon" href="images/logo.png">

		<title>
			<?php echo 'PWR DOOR PRODUCES';?>
		</title>
	</head>

	<body>
		<!--absolute position-->
		<div id="wrapper">

			<!--fixed position-->
			<img id="logo" src="images/logo.png" alt="pwrdoor.com"/>

			<!--fixed position-->
			<?php include 'nav.php';?>

			<!--absolute position-->
			<div id="movieTheater">
				<!--fixed position-->
				<iframe id="screen"></iframe>
			</div>

			<!--absolute position-->
			<div id="gallery">
				<!--fixed position-->
				<img id="graphic" src="">
			</div>

			<img id="prev" src="images/prev.png">
			<img id="next" src="images/next.png">

			<div id="debug"></div>

		</div>

		<?php include 'scripts/scriptLinks.php';?>
	</body>

</html>
