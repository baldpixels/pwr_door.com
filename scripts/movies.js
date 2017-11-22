"use strict";
//global

var logoUp = false;
var logoDown = false;

$(document).ready(function(){
//local

  //vars

  function moviesCheck(){
    if(movieTime){
      theater();
    }
  }
  setInterval(moviesCheck, 100);

  function theater(){
    if(!logoUp){
      $("#topNav").fadeOut(1000);
      //slide logo up
      $("#logo").animate({"top":"-=200px", "width":"280px"}, 1000, "swing");
      logoUp = true;
    }
  }

});
