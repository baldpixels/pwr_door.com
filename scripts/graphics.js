"use strict";
//global

$(document).ready(function(){
//local

$("#gallery").hide();

  //vars

  function graphicsCheck(){
    if(graphics){
      gallery();
    }
  }
  setInterval(graphicsCheck, 100);

  function gallery(){
    if(!logoDown){
      $("#bottomNav").fadeOut(1000);
      $("#topNav").fadeOut(1000);
      //slide logo down
      $("#logo").animate({"top":"+=240px", "width":"220px"}, 1000, "swing");
      logoDown = true;

      $("#gallery").fadeIn(1000);

      //wait 5s for screen to drop
      setTimeout(
        function(){
          //graphics go here
        }, 5000);

      //wait 7s for intro gif to finish
      setTimeout(
        function(){
          $("#gallery").css("background-image", "url('/pwrdoor.com/style/BG_images/galleryBG.gif')");
        }, 7000);
    }
  }

});
