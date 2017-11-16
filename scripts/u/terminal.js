"use strict";

// this code works the modern way

//timing vars
var startTime = new Date();
var endTime = new Date(startTime.getTime() + 5*60000);
var timeString;
var endTimeString;
var fps = 30;
var frame = 0;

var text = true;
var movies = false;
var graphics = false;

var gaming = false;
var open = false;

$(document).ready(function(){

  //game button vars
  var enter = false;
  var left = false;
  var right = false;
  var up = false;
  var down = false;

  //game mechanic vars
  var playerID = 0;
  var level = 0;
  var cursorLoc = [20, 100];

  //setup ctx and hide the terminal
  var ctx = terminal.getContext("2d");
  $("#debug").html("");

  //updates time
  function updateTime() {
      var currentTime = new Date();
      if(currentTime == endTime) {
        dead();
      }
      else {
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        var seconds = currentTime.getSeconds()
        if (minutes < 10){
            minutes = "0" + minutes
        }
        if (seconds < 10){
          seconds = "0" + seconds
        }
      }
      timeString = hours + ":" + minutes + ":" + seconds;
  }
  //setup string for endTime
  var endHours = endTime.getHours();
  var endMinutes = endTime.getMinutes();
  var endSeconds = endTime.getSeconds();
  if (endMinutes < 10){
      endMinutes = "0" + endMinutes
  }
  if (endSeconds < 10){
    endSeconds = "0" + endSeconds
  }
  endTimeString = endHours + ":" + endMinutes + ":" + endSeconds;

  //game over
  function dead() {
    $(document).html("<html></html>");
  }

  //gameplay
  var script = ["Hello.",
  "I'm u.",
  "Select one of these...",
  "Select one of these...",
  "OK. Now choose a file.",
  "END."];

  var instructions = ["> press enter",
  "> press enter",
  "> press enter",
  "> select an image",
  "> move the cursor"];

  var waitingForArrow = [false,
  false,
  false,
  false,
  true,
  false];

  var waitingForEnter = [true,
  true,
  true,
  true,
  true,
  true];

  //keypress listeners/functions
  $(document).keydown(keyDownHandler);
  $(document).keyup(keyUpHandler);

  function keyDownHandler(e) {
      if(e.keyCode == 13) {
          enter = true;
      }
      else if(e.keyCode == 37){
          left = true;
      }
      else if(e.keyCode == 38){
          up = true;
      }
      else if(e.keyCode == 39){
          right = true;
      }
      else if(e.keyCode == 40){
          down = true;
      }
  }
  function keyUpHandler(e) {
      if(e.keyCode == 13) {
          enter = false;
      }
      else if(e.keyCode == 37){
          left = false;
      }
      else if(e.keyCode == 38){
          up = false;
      }
      else if(e.keyCode == 39){
          right = false;
      }
      else if(e.keyCode == 40){
          down = false;
      }
  }

  //main loop
  function main(){
    if(text){
      if(gaming==true){
        game();
      }
      update();
      draw();
      frame++;
      $("#debug").html("<p>frame = " + frame + "</p>");
    }
  }
  setInterval(main, 1000/fps);

  //update all variables
  function update(){
      updateTime();
      updateSize();
      updateButtons();
      levelEffects();
  }

  function updateSize(){
    terminal.height = terminal.width;
  }

  function updateButtons(){
    if(waitingForEnter[level]){
      if(enter){
        if(level >= script.length){
          level = 0;
        }
        else{
          level++;
        }
        enter = false;
      }
    }
    if(waitingForArrow[level]){
      if(left){
        moveLeft();
      }
      else if(up){
        moveUp();
      }
      else if(right){
        moveRight();
      }
      else if(down){
        moveDown();
      }
    }
  }

  function levelEffects(){
    if(level == 3){
      navFadeIn();
    }
  }

  function draw(){
    clearTerminal();
    setupCanvas();
    drawClock();
    drawText();
    if(waitingForArrow[level]){
      drawCursor();
    }
  }

  function clearTerminal() {
    ctx.clearRect(0, 0, terminal.width, terminal.height);
  }

  function setupCanvas() {
    //fill canvas
    ctx.beginPath();
    ctx.rect(0, 0, terminal.width, terminal.height);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();

    //fill top bar
    ctx.beginPath();
    ctx.rect(0, 0, terminal.width, 25);
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
  }

  function drawClock(){
    var x_coord = terminal.width - 135;
    var y_coord = 15;

    ctx.fillStyle = "#000";
    ctx.font = "10px monospace";
    ctx.fillText("Current Time: " + timeString, x_coord, y_coord);
  }

  function drawText(){
    var currentText = script[level];
    var currentInst = instructions[level];

    ctx.fillStyle = "#00cc00";
    ctx.font = "12px monospace";
    ctx.fillText(currentText, 20, 60);

    blinkInst(currentInst);
  }

  function drawCursor(){
    ctx.fillStyle = "#00cc00";
    ctx.font = "12px monospace";
    ctx.fillText("_", cursorLoc[0], cursorLoc[1]);
  }

  function moveLeft(){
    cursorLoc[0] = cursorLoc[0] - 5;
    drawCursor();
  }
  function moveUp(){
    cursorLoc[1] = cursorLoc[1] - 5;
    drawCursor();
  }
  function moveRight(){
    cursorLoc[0] = cursorLoc[0] + 5;
    drawCursor();
  }
  function moveDown(){
    cursorLoc[1] = cursorLoc[1] + 5;
    drawCursor();
  }

  //animations and effects
  function blinkInst(text){
    var now = new Date();
    ctx.font = "12px monospace";
    //show cursor
    if((now.getSeconds())%2 == 0){
      ctx.fillText(text + " /", 20, 80);
    }
    //no cursor
    else{
      ctx.fillText(text, 20, 80);
    }
  }

  function navFadeIn(){
    $("#leftNav").fadeIn(500, function(){
      $("#topNav").fadeIn(500, function(){
        $("#rightNav").fadeIn(500, function(){
          $("#bottomNav").fadeIn(500)
        })
      })
    });
  }

});
