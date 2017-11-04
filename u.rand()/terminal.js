"use strict";

// this code works the modern way

var startTime = new Date();
var endTime = new Date(startTime.getTime() + 5*60000);
var scriptCounter = 0;
var inputCounter = 0;
var playerNum = 1;
var inputBool = false;

//time setup and interval check

function updateTime() {
    var currentTime = new Date()
    if(currentTime == endTime) {
      dead();
    }
    else {
      var hours = currentTime.getHours()
      var minutes = currentTime.getMinutes()
      if (minutes < 10){
          minutes = "0" + minutes
      }
      var t_str = hours + ":" + minutes + " ";
      document.getElementById('time').innerHTML = "Current Time = " + t_str;
    }
}
setInterval(updateTime, 1000);

var endHours = endTime.getHours();
var endMinutes = endTime.getMinutes();
if (endMinutes < 10){
    endMinutes = "0" + minutes
}
var endTimeString = endHours + ":" + endMinutes + " ";

//other functions

function dead() {
  document.innerHTML = "u are dead.";
}

//scripts

var script = [": just now, u were created.",
": at " + endTimeString + " u will die.",
": u are number " + playerNum + ".",
"# 1",
"well done.",
"now again...",
"# 2",
"end"];

var inputs = ["TEST 1 INPUT",
""];

//first output

var termLineContent = script[0];
document.getElementById('termLine').innerHTML = termLineContent + "<br/><br/>" + "<button onclick='buttonPush()'>: ok</button>";

//buttonPush() determines game flow

function buttonPush() {
  if(inputBool) {
    if(document.getElementById("termIn" + inputCounter).match(/^\d{9}$/)) {
      inputBool = false;
      inputCounter++;
    }
    else {
      document.getElementById('leftText') = "9 digits please";
    }
  }
  scriptCounter++;
  if(scriptCounter < (script.length + inputs.length)){
    if(script[scriptCounter].charAt(0) == ":") {
      termLineContent = termLineContent + "<br/><br/>" + script[scriptCounter];
      document.getElementById('termLine').innerHTML = termLineContent + "<br/><br/>" + "<button onclick='buttonPush()'>: ok</button>";
    }
    else if(script[scriptCounter].charAt(0) == "#") {
      termLineContent = termLineContent + "<br/><br/>";
      document.getElementById('termLine').innerHTML = termLineContent + "<form class='termForm'><input class='termIn' id='termIn1' type='number' minlength='9' maxlength='9' name='termIn1'><input class='termSubmit' type='button' onclick='buttonPush()' value='u.produce()'></form>";
      inputBool = true;
    }
  }
}
