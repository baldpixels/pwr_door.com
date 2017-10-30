<!doctype html>
<html>

	<head>
		<meta charset="UTF-8">
		<?php include 'style/cssLinks.php';?>
		<link rel="stylesheet" type="text/css" href="style/navTop.css">
		<link rel="stylesheet" type="text/css" href="style/content.css">
		<?php include 'style/fonts.php';?>
		<title>pwrdoor graphics</title>
	</head>

	<body>

		<div id="container"> <!--fixed position-->
			<figure> <!--absolute position-->
				<a href="index.php"><img id="logoTop" src="images/logo.png" onmouseover="this.src='images/logo_hover.png';" onmouseout="this.src='images/logo.png';" alt="pwrdoor.com"/></a>
			</figure>

			<?php include 'nav.php';?> <!--absolute position-->

			<main> <!--absolute position-->
				<section>
					<script src="functions/js_mediaFunctions.js"></script>
					<button type="button" class="randomButton" onclick="self.location='graphics.php'">[random graphic]</button>
					<article class="randomMedia">
						<?php include 'randomGraphic.php';?>
						<div class="caption">
							<a href="<?php echo"graphics/$mediaName";?>" download>
								<?php echo "<p>$mediaName</p>";?>
							</a>
						</div>
					</article>
					<button type="button" class="randomButton" onclick="self.location='graphics.php'">[another one please]</button>
				</section>
			</main>

			<div id="footer"><?php include 'footer.php';?></div> <!--absolute position-->
		</div>

	</body>

</html>
