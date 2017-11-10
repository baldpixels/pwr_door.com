"use strict";

// this code works the modern way

var startTime = new Date();
var endTime = new Date(startTime.getTime() + 5*60000);
var timeString;
var endTimeString;

var playing = false;
var fps = 30;
var playerNum = 1;

var terminal = document.getElementById("terminal");
var ctx = terminal.getContext("2d");
var debug = document.getElementById("debug");
terminal.style.display = "none";

//time setup and interval check

function updateTime() {
    var currentTime = new Date()
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
    timeString = hours + ":" + minutes + ":" + seconds + " ";
}

var endHours = endTime.getHours();
var endMinutes = endTime.getMinutes();
var endSeconds = endTime.getSeconds();
if (endMinutes < 10){
    endMinutes = "0" + endMinutes
}
if (endSeconds < 10){
  endSeconds = "0" + endSeconds
}
endTimeString = endHours + ":" + endMinutes + ":" + endSeconds + " ";

//other functions

function dead() {
  document.innerHTML = "u are dead.";
}

//pwrClick() reveals terminal and hides logo
function pwrClick() {
  playing = true;
  var logo = document.getElementById("logo");

  logo.style.display = "none";
  terminal.style.display = "block";
}

//main loop
setInterval(function() {
  clearTerminal();
  update();
  draw();
}, 1000/fps);

function update(){
  updateClock();
}

function draw(){
  terminalStyler();
  ctx.font = "12px monospace";
  ctx.fillText("> Just now, u were born.", 5, 60);
}

function terminalStyler() {
  ctx.beginPath();
  ctx.lineWidth="1";
  ctx.strokeStyle="#00cc00";
  ctx.rect(2,2,terminal.width-2,terminal.height-2);
  ctx.stroke();
}

function clearTerminal() {
  ctx.clearRect(0, 0, terminal.width, terminal.height);
}

function updateClock() {
  updateTime();
  var x_coord = terminal.width - 135;
  ctx.fillStyle = "#00cc00";
  ctx.font = "10px monospace";
  ctx.fillText("Current Time: " + timeString, x_coord, 15);
}
