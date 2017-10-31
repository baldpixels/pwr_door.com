"use strict";

// this code works the modern way

var startTime = new Date();
var endTime = new Date(startTime.getTime() + 5*60000);

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

function dead() {
  document.innerHTML = "";
}

function buttonPush() {
  document.getElementById('termLine').innerHTML = termLineContent;
}

var termLineContent = ": Just now, u were born."

document.getElementById('termLine').innerHTML = termLineContent;

var endHours = endTime.getHours()
var endMinutes = endTime.getMinutes()
if (endMinutes < 10){
    endMinutes = "0" + minutes
}
var et_str = endHours + ":" + endMinutes + " ";
termLineContent = ": At " + et_str + " u will die.";
