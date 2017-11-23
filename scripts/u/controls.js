"use strict";
//global

  var keyMap = {}; // You could also use an array

  onkeydown = onkeyup = function(e){
      e = e || event; // to deal with IE
      keyMap[e.keyCode] = e.type == 'keydown';
  }
