"use strict";
//global

$(document).ready(function(){
//local

  var screenUp = true;

  var movieLinks = ["https://player.vimeo.com/video/214244680",
    "https://www.youtube.com/embed/H9aNt2pWA7s",
    "https://player.vimeo.com/video/177589535",
    "https://player.vimeo.com/video/173084329"
  ];

  $("#movieTheater").hide();
  $("#screen1").hide();
  $("#screen2").hide();
  $("#prev").hide();
  $("#next").hide();

  $("#prev").click(prevClick);
  $("#prev").hover(function(){
    this.src = "images/prev_hover.png";
  });
  $("#prev").mouseleave(function(){
    this.src = "images/prev.png";
  });

  $("#next").click(nextClick);
  $("#next").hover(function(){
    this.src = "images/next_hover.png";
  });
  $("#next").mouseleave(function(){
    this.src = "images/next.png";
  });

  //screen hover animations
  $("#screen1").hover(function(){
    if(!screenUp){
      $("#screen1").animate({"top":"-=350px"}, 250, "swing");
      screenUp = true;
    }
  });
  $("#screen1").mouseleave(function(){
    if(screenUp){
      $("#screen1").animate({"top":"+=350px"}, 375, "swing");
      screenUp = false;
    }
  });

  function moviesCheck(){
    if(movieTime){
      theater();
    }
  }
  setInterval(moviesCheck, 100);

  var currentSlide = 0;

  function theater(){
    if(!logoUp){
      $("#navBG").fadeOut(1000);

      //slide logo up
      $("#logo").animate({"top":"-=220px", "width":"280px"}, 1000, "swing");
      logoUp = true;

      $("#movieTheater").fadeIn(500);

      //wait 2s for screen to drop
      setTimeout(
        function(){
          $("#screen1").attr("src", movieLinks[currentSlide]);
          $("#screen1").fadeIn(500);

          //initial screen down
          if(screenUp){
            $("#screen1").animate({"top":"+=350px"}, 500, "swing");
            screenUp = false;
          }
        }, 1000);

    }
  }

    function slideLeft(){
        if(currentSlide < movieLinks.length){
          currentSlide++;
          if(currentSlide%2 == 0){
            $("#screen1").attr("src", movieLinks[currentSlide]);
            $("#screen2").animate({"left":"-=1000px", "opacity":"0"}, 1000, "swing");
            $("#screen1").animate({"left":"+=1000px"});
            $("#screen1").fadeIn(500);
            $("#screen1").animate({"left":"-=1000px"}, 1000, "swing");
          }
          else{
            $("#screen2").attr("src", movieLinks[currentSlide]);
            $("#screen1").animate({"left":"-=1000px", "opacity":"0"}, 1000, "swing");
            $("#screen2").animate({"left":"+=1000px"});
            $("#screen2").fadeIn(500);
            $("#screen2").animate({"left":"-=1000px"}, 1000, "swing");
          }
        }
    }

    function slideRight(){
       if(0 < currentSlide){
          currentSlide--;
          if(currentSlide%2 == 0){
            $("#screen1").attr("src", movieLinks[currentSlide]);
            $("#screen2").animate({"right":"-=1000px", "opacity":"0"}, 1000, "swing");
            $("#screen1").animate({"right":"+=2000px"});
            $("#screen1").fadeIn(500);
            $("#screen1").animate({"right":"-=1000px"}, 1000, "swing");
          }
          else{
            $("#screen2").attr("src", movieLinks[currentSlide]);
            $("#screen1").animate({"right":"-=1000px", "opacity":"0"}, 1000, "swing");
            $("#screen2").animate({"right":"+=1000px"});
            $("#screen2").fadeIn(500);
            $("#screen2").animate({"right":"-=1000px"}, 1000, "swing");
          }
        }
    }

      function prevClick(){
        currentSlide--;
      }
      function nextClick(){
        currentSlide++;
      }

});
