"use strict";
//global

$(document).ready(function(){
//local

  var currentGraphic = 0;
  var updateGraphic = false;

  var graphicLinks = ["/pwrdoor.com/graphics/PWR_DOOR_OFF_logo.png",
  "/pwrdoor.com/graphics/PWR_DOOR_media_intro.gif",
  "/pwrdoor.com/graphics/q_logo_01.png",
  "/pwrdoor.com/graphics/q_logo_02.png",
  "/pwrdoor.com/graphics/q_logo_03.png",
  "/pwrdoor.com/graphics/q_logo_04.png",
  "/pwrdoor.com/graphics/bonsai_logo.png",
  "/pwrdoor.com/graphics/berries.jpg",
  "/pwrdoor.com/graphics/commerce_city.jpg",
  "/pwrdoor.com/graphics/coyote.jpg",
  "/pwrdoor.com/graphics/FORK.jpg",
  "/pwrdoor.com/graphics/canyon_steam.jpg",
  "/pwrdoor.com/graphics/lovers_pee.jpg",
  "/pwrdoor.com/graphics/penny_purple.jpg",
  "/pwrdoor.com/graphics/ranger.jpg",
  "/pwrdoor.com/graphics/reach.jpg",
  "/pwrdoor.com/graphics/rocks_red.jpg",
  "/pwrdoor.com/graphics/shadows.jpg",
  "/pwrdoor.com/graphics/snow_scooter.jpg",
  "/pwrdoor.com/graphics/snowboard_sequence.png",
  "/pwrdoor.com/graphics/steamboat.jpg",
  "/pwrdoor.com/graphics/succulent.jpg"
  ];

  $("#gallery").hide();
    $("#graphic").hide();

  //graphic controls
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

  function graphicsCheck(){
    if(graphics){
      gallery();
    }
  }
  setInterval(graphicsCheck, 100);

  //main loop
  function gallery(){
    //gallery intro
    if(!logoDown){
      $("#navBG").fadeOut(1000);

      //slide logo down
      $("#logo").animate({"top":"+=220px", "width":"280px"}, 1000, "swing");
      logoDown = true;

      $("#gallery").fadeIn(1000);

      //wait 1s for graphics fadeIn
      setTimeout(
        function(){
          $("#graphic").attr("src", graphicLinks[currentGraphic]);
          $("#graphic").fadeIn(1000, function(){
            $("#next").fadeIn(500);
            $("#prev").fadeIn(500);
            //relocate controls if needed
            if(controlsUp){
              $("#next").animate({"top":"+=120px"}, 250, "swing")
              $("#prev").animate({"top":"+=120px"}, 250, "swing")
              controlsUp = false;
            }
          });
        }, 1000);
    }
    //end intro

    //update graphic if slide changes
    if(updateGraphic){
      $("#graphic").attr("src", graphicLinks[currentGraphic]);
      updateGraphic = false;
    }

    $("#debug").fadeIn(250);
    $("#debug").html("test");

  }

    //previous button click action
    function prevClick(){
      if(graphics){
        currentGraphic--;
        updateGraphic = true;
        //circle back if needed
        if(currentGraphic == -1){
          currentGraphic = graphicLinks.length - 1;
        }
      }
    }

    //next button click action
    function nextClick(){
      if(graphics){
        currentGraphic++;
        updateGraphic = true;
        //circle forward if needed
        if(currentGraphic == graphicLinks.length){
          currentGraphic = 0;
        }
      }
    }

});
