<?php

	function randomMedia() {
		$rand = rand(0,2);
		
		if ($rand==0) {
			$mediaArray = explode("\n", file_get_contents('photos/photo_catalogue.txt'));
		
			$arrayLength = count($mediaArray);	
		
			return array($mediaArray[rand(0,($arrayLength-1))], "photo");
		}
		elseif ($rand==1) {
			$mediaArray = explode("\n", file_get_contents('movies/movie_catalogue.txt'));
		
			$arrayLength = count($mediaArray);	
		
			return array($mediaArray[rand(0,($arrayLength-1))], "movie");
		}
		else {
			$mediaArray = explode("\n", file_get_contents('graphics/graphic_catalogue.txt'));
		
			$arrayLength = count($mediaArray);	
		
			return array($mediaArray[rand(0,($arrayLength-1))], "graphic");
		}
	}

	function randomGraphic() {
			$mediaArray = explode("\n", file_get_contents('graphics/graphic_catalogue.txt'));
		
			$arrayLength = count($mediaArray);	
		
			return array($mediaArray[rand(0,($arrayLength-1))], "graphic");
	}

	function randomMovie() {
			$mediaArray = explode("\n", file_get_contents('movies/movie_catalogue.txt'));
		
			$arrayLength = count($mediaArray);	
		
			return array($mediaArray[rand(0,($arrayLength-1))], "movie");
	}

?>