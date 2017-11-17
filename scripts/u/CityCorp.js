"use strict";
//global

var playing = false;

function startGame(){
  playing = true;
}

$(document).ready(function(){
//local

  var xL = 50;
  var xR = 60;
  var yL = 20;
  var yR = 30;

  var dx;
  var dy;

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
      drawOneColumn();
      shift();
      updateGrid();
      //everything goes here
    }
  }
  setInterval(checkGame, 100);

  function drawGame(){
    ctx.beginPath();
    ctx.rect(0, 25, terminal.width, 50);
    ctx.fillStyle = "#ba068c";
    ctx.fill();
    ctx.closePath();
  }

  function drawCursor(){
    ctx.fillStyle = "#00cc00";
    ctx.font = "12px monospace";
    ctx.fillText("_", cursorLoc[0], cursorLoc[1]);
  }

  function shift(){
    xL--;
    xR--;

  }

  function updateGrid(){

  }

  //375x, 375y, 5s



});
