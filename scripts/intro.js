"use strict";
//global

var intro = true;

var movieTime = false;
var graphics = false;

$(document).ready(function(){
//local

  $("#BG").hide();

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

  //pwrClick kicks things off
  function pwrClick(){
    if(intro){
      navFadeIn();
      intro = false;
    }
    if(movieTime){
      if(logoUp){
        //re-center logo
        $("#logo").animate({"top":"+=200px"}, 1000, "swing");
        logoUp = false;

        $("#topNav").fadeIn(1000);
      }
      movieTime = false;
    }
    if(graphics){
      if(logoDown){
        //re-center logo
        $("#logo").animate({"top":"-=200px"}, 1000, "swing");
        down = false;

        $("#bottomNav").fadeIn(1000);
      }
      graphics = false;
    }
  }

    function fadeBG(){
      $("#BG").fadeIn(1000, navFadeIn);
    }

    //animations and effects
    function navFadeIn(){
      $("#topNav").fadeIn(500, function(){
        $("#bottomNav").fadeIn(500)
      });
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
