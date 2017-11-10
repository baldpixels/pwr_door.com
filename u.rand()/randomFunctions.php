<?php function randomTitle() {

  $rand = rand(0,2);

  if ($rand==0) {
    $mediaArray = explode("\n", file_get_contents('u.rand()/title.txt'));

    $arrayLength = count($mediaArray);

    return array($mediaArray[rand(0,($arrayLength-1))], "title");
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

?>
