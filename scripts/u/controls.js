"use strict";
//global

  //game button vars
  var enter = false;

  var left = false;
  var right = false;
  var up = false;
  var down = false;

  var upRight = false;
  var upLeft = false;
  var downLeft = false;
  var downRight = false;

  //keypress listeners/functions
  //$(document).keydown(keyDownHandler);
  //$(document).keyup(keyUpHandler);

  var keyMap = {}; // You could also use an array

  onkeydown = onkeyup = function(e){
      e = e || event; // to deal with IE
      keyMap[e.keyCode] = e.type == 'keydown';

      //check double keypress cases first
      if(keyMap[37] && keyMap[38]){ // left+up
          moveLeftUp();
      }
      else if(keyMap[37] && keyMap[40]){ // left+down
          moveLeftDown();
      }
      else if(keyMap[39] && keyMap[40]){ // right+down
          moveRightDown();
      }
      else if(keyMap[39] && keyMap[38]){ // right+up
          moveRightUp();
      }

      //single keypress cases
      else if(keyMap[39] && keyMap[38]){ // right+up
          moveRightUp();
      }
      else if(keyMap[39] && keyMap[38]){ // right+up
          moveRightUp();
      }
      else if(keyMap[39] && keyMap[38]){ // right+up
          moveRightUp();
      }
      else if(keyMap[39] && keyMap[38]){ // right+up
          moveRightUp();
      }
  }
