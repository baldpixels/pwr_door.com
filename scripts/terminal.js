"use strict";
//global

  var intro = true;

  var movies = false;
  var graphics = false;
  var gaming = false;
  var xinxi = false;

$(document).ready(function(){
//local

  //setup ctx
  var terminal = document.getElementById("terminal");
  var ctx = terminal.getContext("2d");

  var topBound = 24;
  var bottomBound = terminal.height - 24;

  $("#debug").html("");

  //main loop
  //
  //
  function main(){
    update();
    draw();

    frame++;
    $("#debug").html("<p>frame = " + frame + "</p>");
  }
  setInterval(main, 1000/fps);

    //update all variables
    function update(){
        updateTime();
        updateSize();
    }

      function updateSize(){
        terminal.height = terminal.width;
      }

      function clearTerminal() {
        ctx.clearRect(0, 0, terminal.width, terminal.height);
      }

      function setupCanvas() {
        //clear terminal
        ctx.clearRect(0, 0, terminal.width, terminal.height);

        //fill canvas
        ctx.beginPath();
        ctx.rect(0, 0, terminal.width, terminal.height);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();

        //fill top bar
        ctx.beginPath();
        ctx.rect(0, 0, terminal.width, 24);
        ctx.fillStyle = "#00cc00";
        ctx.fill();
        ctx.closePath();

        //draw border
        ctx.beginPath();
        ctx.lineWidth="2";
        ctx.strokeStyle="#00cc00";
        ctx.rect(1,1,terminal.width-2,terminal.height-2);
        ctx.stroke();
        ctx.closePath();

        //draw input box
        ctx.beginPath();
        ctx.moveTo(0, terminal.height-24);
        ctx.lineTo(terminal.width, terminal.height-24);
        ctx.lineWidth="2";
        ctx.stroke();
        ctx.closePath();
      }

      function drawClock(){
        var x_coord = terminal.width - 135;
        var y_coord = 15;

        ctx.fillStyle = "#000";
        ctx.font = "10px monospace";
        ctx.fillText("Current Time: " + timeString, x_coord, y_coord);
      }

    function draw(){
      setupCanvas();
      drawClock();

      if(intro){
        introDraw();
      }

      else if(gaming){
        gameDraw();
      }
      else if(xinxi){

      }
      else if(movies){

      }
      else if(graphics){

      }
    }

    function introDraw(){
      ctx.fillStyle = "#00cc00";
      ctx.font = "12px monospace";
      ctx.fillText("Hello. Please choose one of these.", 20, 60);
    }

    function gameDraw(){
      // draw center octagon
      if(octaCenter){
        octaCenterMap(30);
      }
      else{
        squareCenterMap();
      }

    }

      function octaCenterMap(size){
          var y = topBound;
          var x = 0;

          while(topBound <= y <= bottomBound){
            drawOctagon(size, x, y);
            while(0 <= x <= terminal.width){
              drawOctagon(size, x, y);
              x = x + size*2;
            }
            x = 0;
            y = y + size*2;
          }

      }

      function squareCenterMap(){

      }

        function drawOctagon(size, xCenter, yCenter){
          var numberOfSides = 8,
            rotation = Math.PI/8;

          ctx.beginPath();
          ctx.moveTo (xCenter +  size * Math.cos(0 + rotation), yCenter +  size *  Math.sin(0 + rotation));

          for (var i = 1; i <= numberOfSides; i += 1) {
              ctx.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides + rotation), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides + rotation));
          }

          ctx.strokeStyle = "#00cc00";
          ctx.lineWidth = 4;
          ctx.stroke();
        }

        function drawSquare(size, xCenter, yCenter){
          var numberOfSides = 4,
            rotation = Math.PI/4;

          ctx.beginPath();
          ctx.moveTo (xCenter +  size * Math.cos(0 + rotation), yCenter +  size *  Math.sin(0 + rotation));

          for (var i = 1; i <= numberOfSides; i += 1) {
              ctx.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides + rotation), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides + rotation));
          }

          ctx.strokeStyle = "#00cc00";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

});
