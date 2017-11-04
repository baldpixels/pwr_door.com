<!doctype html>
<html>

	<head>
		<meta charset="UTF-8">
		<?php include 'style/cssLinks.php';?>
		<link rel="stylesheet" type="text/css" href="style/navTop.css">
		<link rel="stylesheet" type="text/css" href="style/content.css">
		<link rel="stylesheet" type="text/css" href="style/u.rand().css">
		<?php include 'style/fonts.php';?>
		<title>u.rand()</title>
	</head>

	<body>

		<div id="container"> <!--fixed position-->
			<figure> <!--absolute position-->
				<a href="index.php"><img id="logoTop" src="images/logo.png" onmouseover="this.src='images/logo_hover.png';" onmouseout="this.src='images/logo.png';" alt="pwrdoor.com"/></a>
			</figure>

			<?php include 'nav.php';?> <!--absolute position-->

			<main> <!--absolute position-->
				<section>
					<article>
						<div id="terminalHead">
							<p id="leftText">u.rand()</p>
							<p id="time"></p>
						</div>
						<div id="terminal">
							<div id="termLine">
								<!--push here-->
							</div>
							<script src="u.rand()/terminal.js"></script>
						</div>
					</article>
				</section>
			</main>

		</div>

	</body>

</html>
