"use strict";

// this code works the modern way

var startTime = new Date();
//var currentTime = startTime;
var endTime = new Date(startTime.getTime() + 5*60000);
var timeString;
var endTimeString;
var fps = 30;
var frame = 0;

var playing = false;
var entPressed = false;
var playerID = 0;
var level = 0;

var cursorLoc;

var terminal = document.getElementById("terminal");
var ctx = terminal.getContext("2d");
var debug = document.getElementById("debug");
var logo = document.getElementById("logo");
terminal.style.display = "none";
debug.innerHTML = "";

//time setup and interval check

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

function dead() {
  document.innerHTML = "<html></html>";
}

var script = ["Just now, u were born.",
"At " + endTimeString + ", u will die.",
"How you choose to spend this time...",
"...is up to u.",
"END"];

var instructions = ["> press enter",
"> press enter",
"> press enter",
"> begin",
"END"];

//listeners for keypress
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 13) {
        entPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 13) {
        entPressed = false;
    }
}

//pwrClick() reveals terminal and hides logo
function pwrClick() {
  playing = true;

  logo.style.display = "none";
  terminal.style.display = "block";
}

//main loop
function main(){
  update();
  draw();

  frame++;
  debug.innerHTML = "<p>frame = " + frame + "</p>";
}
setInterval(main, 1000/fps);

//update all variables
function update(){
  updateTime();
  updateSize();
  updateButtons();
}

function updateSize(){
  terminal.height = terminal.width;
}

function updateButtons(){
  if(entPressed){
    if(level >= script.length){
      level = 0;
    }
    else{
      level++;
    }
    entPressed = false;
  }
}

function draw(){
  clearTerminal();
  setupCanvas();
  drawClock();
  drawText();
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

  cursorLoc = [20, 60];
  ctx.fillStyle = "#00cc00";
  ctx.font = "12px monospace";
  ctx.fillText(currentText, cursorLoc[0], cursorLoc[1]);

  blinkInst(currentInst);
}

function blinkInst(text){
  var now = new Date();
  ctx.font = "12px monospace";
  //show cursor
  if((now.getSeconds())%2 == 0){
    ctx.fillText(text + " /", cursorLoc[0], cursorLoc[1]+20);
  }
  //no cursor
  else{
    ctx.fillText(text, cursorLoc[0], cursorLoc[1]+20);
  }
}

function movies(){

}

function graphics(){

}

function urand(){

}

function xinxi(){

}
