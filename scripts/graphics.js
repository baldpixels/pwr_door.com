"use strict";
//global

$(document).ready(function(){
//local

  $("#gallery").hide();
  $("#graphic").hide();

  var graphicLinks = ["/pwrdoor.com/graphics/q_logo_01.png"
  ];

  var currentSlide = 0;

  var xCursor;
  var yCursor;

  $("#graphic").mousemove(function( event ) {
    var xCursor = event.pageX;
    var yCursor = event.pageY;
  });

  function graphicsCheck(){
    if(graphics){
      gallery();
    }
  }
  setInterval(graphicsCheck, 100);

  function gallery(){
    if(!logoDown){
      $("#navBG").fadeOut(1000);

      //slide logo down
      $("#logo").animate({"top":"+=220px", "width":"280px"}, 1000, "swing");
      logoDown = true;

      $("#gallery").fadeIn(1000);

      //wait 5s for screen to drop
      setTimeout(
        function(){
          //graphics go here
          $("#graphic").attr("src", graphicLinks[currentSlide]);
          $("#graphic").fadeIn(500);
        }, 1000);

      //wait 7s for intro gif to finish
      setTimeout(
        function(){
          $("#gallery").css("background-image", "url('/pwrdoor.com/style/BG_images/galleryBG.gif')");
        }, 7000);
    }
    $("#debug").fadeIn(250);
    $("#debug").html("test");

    checkCursor();
  }

  function checkCursor(){
    $("#debug").fadeIn(250);
    $("#debug").html("x-coord: " + xCursor);
    //$("#graphic").animate({"right":"+=150px"}, 500, "swing");
  }

});
