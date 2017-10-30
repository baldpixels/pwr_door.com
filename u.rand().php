<!doctype html>
<html>

	<head>
		<meta charset="UTF-8">
		<?php include 'style/cssLinks.php';?>
		<link rel="stylesheet" type="text/css" href="style/navTop.css">
		<link rel="stylesheet" type="text/css" href="style/content.css">
		<link rel="stylesheet" type="text/css" href="style/u.rand().css">
		<?php include 'style/fonts.php';?>
		<title>pwrdoor off</title>
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
						<div id="terminal">
							<div class="text">
								> You were born just now...
							</div>
							<div class="instruction">
								[click 'i']
							</div>
							<div class="text">
								> At TIME you will die.
							</div>
							<div class="instruction">
								[click 'i']
							</div>
						</div>
					</article>
				</section>
			</main>

		</div>

	</body>

</html>
