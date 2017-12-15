"use strict";
//global

$(document).ready(function(){
//local

  var currentMovie = 0;
  var updateMovie = false;

  var movieLinks = ["https://player.vimeo.com/video/214244680",
    "https://www.youtube.com/embed/H9aNt2pWA7s",
    "https://player.vimeo.com/video/177589535",
    "https://player.vimeo.com/video/173084329"
  ];

  $("#movieTheater").hide();
    $("#screen").hide();

  //movie controls
  $("#prev").click(prevClick);
    $("#prev").hover(function(){
      this.src = "images/prev.png";
    });
    $("#prev").mouseleave(function(){
      this.src = "images/prev.png";
    });

  $("#next").click(nextClick);
    $("#next").hover(function(){
      this.src = "images/next.png";
    });
    $("#next").mouseleave(function(){
      this.src = "images/next.png";
    });

  //timer for checking if its movieTime
  function moviesCheck(){
    if(movieTime){
      theater();
    }
  }
  setInterval(moviesCheck, 100);

  //main loop
  function theater(){
    //theater intro
    if(!logoUp){
      $("#navBG").fadeOut(1000);

      //slide logo up
      $("#logo").animate({"top":"-=220px", "width":"280px"}, 1000, "swing");
      logoUp = true;

      $("#movieTheater").fadeIn(500);

      //wait 1s for screen fadeIn
      setTimeout(
        function(){
          $("#screen").attr("src", movieLinks[currentMovie]);
          $("#screen").fadeIn(1000, function(){
            $("#next").fadeIn(500);
            $("#prev").fadeIn(500);
            //relocate controls if needed
            if(!controlsUp){
              $("#next").animate({"top":"-=120px"}, 250, "swing")
              $("#prev").animate({"top":"-=120px"}, 250, "swing")
              controlsUp = true;
            }
          });
        }, 1000);
    }
    //end intro

    //update movie if slide changes
    if(updateMovie){
      $("#screen").attr("src", movieLinks[currentMovie]);
      updateMovie = false;
    }

    //call drag functions and stuff here
  }

      //previous button click action
      function prevClick(){
        if(movieTime){
          currentMovie--;
          updateMovie = true;
          //circle back
          if(currentMovie == -1){
            currentMovie = movieLinks.length - 1;
          }
        }
      }

      //next button click action
      function nextClick(){
        if(movieTime){
          currentMovie++;
          updateMovie = true;
          //circle forward
          if(currentMovie == movieLinks.length){
            currentMovie = 0;
          }
        }
      }

});
