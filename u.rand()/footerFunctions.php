<?php

	function catchIP() {
		if (!empty($_SERVER["REMOTE_ADDR"])) {
			$ip = $_SERVER["REMOTE_ADDR"];
		}
		elseif (!empty($_SERVER["HTTP_X_FORWARDED_FOR"])) {
			$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
		}
		else {
			$ip = "null";
		}
		return $ip;
	}

	function randomFooter() {
		$footerTextArray = explode("\n", file_get_contents('footerText.txt'));
		
		$arrayLength = count($footerTextArray);	
		
		return $footerTextArray[rand(0,($arrayLength-1))];
	}

?>