"use strict";
//global

$(document).ready(function(){
//local

  $("#terminal").hide();
  $("#BG").hide();

  $("#leftNav").hide();
  $("#topNav").hide();
  $("#rightNav").hide();
  $("#bottomNav").hide();

  var BG = document.getElementById("BG");
  var BGimg = new Image;
  BGimg.src = "style/BG_images/cyberpunk_solo.gif";

  //setup ctx
  var terminal = document.getElementById("terminal");
  var ctx = terminal.getContext("2d");

  $("#debug").html("");

  //nav listeners and hover functions
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
    $("#logo").fadeOut(100);
    $("#terminal").fadeIn(1000, fadeBG);
  }

    function fadeBG(){
      $("#BG").fadeIn(1000, navFadeIn);
    }

    //animations and effects
    function navFadeIn(){
      $("#leftNav").fadeIn(500, function(){
        $("#topNav").fadeIn(500, function(){
          $("#rightNav").fadeIn(500, function(){
            $("#bottomNav").fadeIn(500)
          })
        })
      });
    }

  function xinxiClick(){
    xinxi = true;

    intro = false;
    movies = false;
    graphics = false;
    gaming = false;
  }

  function moviesClick(){
    movies = true

    intro = false;
    gaming = false;
    graphics = false;
    xinxi = false;
  }

  //initiates game
  function uClick(){
    gaming = true;

    intro = false;
    movies = false
    graphics = false;
    xinxi = false;
  }

  function graphicsClick(){
    graphics = true;

    intro = false;
    movies = false
    xinxi = false;
    gaming = false;
  }

});
