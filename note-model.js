'use strict';

function Note(string, id) {
  this.text = string;
  this.id = id
  console.log(this)
}

Note.prototype.textPrint = function() {
  return this.text;
}
