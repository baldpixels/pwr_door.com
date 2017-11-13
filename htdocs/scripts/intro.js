"use strict";

// this code works the modern way
$(document).ready(function(){

var playing = false;

$("#terminal").hide();

$("#leftNav").hide();
$("#topNav").hide();
$("#rightNav").hide();
$("#bottomNav").hide();

  //image listeners
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

  //hover functions
  function pwrClick(){
    playing = true;

    $("#logo").fadeOut(100);
    $("#terminal").fadeIn(1000);
  }

  function xinxiClick(){

  }
  function moviesClick(){

  }
  function uClick(){

  }
  function graphicsClick(){

  }


});
