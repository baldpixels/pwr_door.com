"use strict";
//global

var intro = true;

var movieTime = false;
var graphics = false;

var logoUp = false;
var logoDown = false;

$(document).ready(function(){
//local

  $("#topNav").hide();
  $("#bottomNav").hide();

  $("#debug").html("");

  //nav listeners and hover functions
  $("#logo").click(pwrClick);
  $("#logo").hover(function(){
    this.src = "images/logo_hover.png";
  });
  $("#logo").mouseleave(function(){
    this.src = "images/logo.png";
  });

  $("#topNav").click(moviesClick);
  $("#topNav").hover(function(){
    this.src = "images/movies_hover.png";
  });
  $("#topNav").mouseleave(function(){
    this.src = "images/movies.png";
  });

  $("#bottomNav").click(graphicsClick);
  $("#bottomNav").hover(function(){
    this.src = "images/graphics_hover.png";
  });
  $("#bottomNav").mouseleave(function(){
    this.src = "images/graphics.png";
  });

  //pwrClick moves stuff around
  function pwrClick(){
    if(intro){
      navFadeIn();
      intro = false;
    }
    if(movieTime){
      if(logoUp){
        moveLogoDown();
      }
      movieTime = false;
    }
    if(graphics){
      if(logoDown){
        moveLogoUp();
      }
      graphics = false;
    }
  }

    //animations and effects
    function navFadeIn(){
      $("#topNav").fadeIn(500, function(){
        $("#bottomNav").fadeIn(500)
      });
    }

    function moveLogoDown(){
      //re-center logo
      $("#logo").animate({"top":"+=240px"}, 1000, "swing");
      logoUp = false;

      $("#screen1").fadeOut(500);
      $("#movieTheater").fadeOut(500);
      $("#topNav").fadeIn(1000);
      $("#bottomNav").fadeIn(1000);
    }

    function moveLogoUp(){
      //re-center logo
      $("#logo").animate({"top":"-=240px"}, 1000, "swing");
      logoDown = false;

      $("#gallery").fadeOut(500);
      $("#bottomNav").fadeIn(1000);
      $("#topNav").fadeIn(1000);
    }

  function moviesClick(){
    movieTime = true;

    intro = false;
    graphics = false;
  }

  function graphicsClick(){
    graphics = true;

    intro = false;
    movieTime = false;
  }

});
