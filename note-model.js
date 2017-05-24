'use strict';

function Note(string, id) {
  this.text = string;
  this.id = id
}

Note.prototype.textPrint = function() {
  return this.text;
}
