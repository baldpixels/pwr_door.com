"use strict";

// this code works the modern way
$(document).ready(function(){

$("#terminal").hide();
$("#BG").hide();

$("#leftNav").hide();
$("#topNav").hide();
$("#rightNav").hide();
$("#bottomNav").hide();

var BG = document.getElementById("BG");
var BGimg = new Image;
BGimg.src = "style/BG_images/cyberpunk_solo.gif";


  //image listeners and hover functions
  $("#logo").click(pwrClick);
  $("#logo").hover(function(){
    this.src = "images/logo_hover.png";
  });
  $("#logo").mouseleave(function(){
    this.src = "images/logo.png";
  });

  $("#leftNav").click(xinxiClick);
  $("#leftNav").hover(function(){
    this.src = "images/xinxi_hover.png";
  });
  $("#leftNav").mouseleave(function(){
    this.src = "images/xinxi.png";
  });

  $("#topNav").click(moviesClick);
  $("#topNav").hover(function(){
    this.src = "images/movies_hover.png";
  });
  $("#topNav").mouseleave(function(){
    this.src = "images/movies.png";
  });

  $("#rightNav").click(uClick);
  $("#rightNav").hover(function(){
    this.src = "images/rand()_hover.gif";
  });
  $("#rightNav").mouseleave(function(){
    this.src = "images/rand().gif";
  });

  $("#bottomNav").click(graphicsClick);
  $("#bottomNav").hover(function(){
    this.src = "images/graphics_hover.gif";
  });
  $("#bottomNav").mouseleave(function(){
    this.src = "images/graphics.gif";
  });

  //pwrClick kicks things off
  function pwrClick(){
    open = true;

    $("#logo").fadeOut(100);
    $("#terminal").fadeIn(1000, fadeBG);
  }

  function fadeBG(){
    $("#BG").fadeIn(1000);
  }

  function xinxiClick(){
    text = true;
  }

  function moviesClick(){

  }

  //initiates game
  function uClick(){
    gaming = true;
  }
  function graphicsClick(){

  }


});
