"use strict";
//global

var playing = false;

function startGame(){
  playing = true;
}

var score = 0;
var weights;

var octaCenter = true;
//false if on square tile

$(document).ready(function(){
//local

  //setup ctx
  var terminal = document.getElementById("terminal");
  var ctx = terminal.getContext("2d");

  $("#debug").html("");

  var depth;
  var grid = function(){
    for(var i=0; i<375; i++){
      for(var j=0; j<375; j++){
        graid[i][j] = false;
      }
    }
  }

  function checkGame(){
    if(playing){
      //everything goes here
    }
  }
  setInterval(checkGame, 100);


  //375x, 375y, 5s

});
