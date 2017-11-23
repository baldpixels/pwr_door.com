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
      $("#logo").animate({"top":"+=200px", "width":"280px"}, 1000, "swing");
      logoDown = true;

      $("#gallery").fadeIn(1000);
    }
  }

});
