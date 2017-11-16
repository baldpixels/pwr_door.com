"use strict";

var start = false;

function game(){
  start = true;
}

// this code works the modern way

$(document).ready(function(){

  var xL = 50;
  var xR = 60;
  var yL = 20;
  var yR = 30;

  var dx;
  var dy;

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
    if(start){
      text = false;
      drawOneColumn();
      shift();
      updateGrid();
      //everything goes here
    }
  }
  setInterval(checkGame, 1000/fps);

  function drawOneColumn(){
    ctx.beginPath();
    ctx.rect(0, 25, terminal.width, 50);
    ctx.fillStyle = "#ba068c";
    ctx.fill();
    ctx.closePath();
  }

  function shift(){
    xL--;
    xR--;

  }

  function updateGrid(){

  }

  //375x, 375y, 5s



});
