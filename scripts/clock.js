"use strict";

// this code works the modern way

//timing vars
var startTime = new Date();
var endTime = new Date(startTime.getTime() + 5*60000);
var timeString;
var endTimeString;
var fps = 30;
var frame = 0;

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
