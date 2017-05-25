'use strict';

function NoteList() {
  var notes = [];

  var n = 0

  var newNote = function(text, fakeNote) {
    notes.push(fakeNote || new Note(text, n));
    n = n + 1;
  }

  var displayNotes = function() {
    var i = 0,
    returnArray = [];
    for (i in notes) {
      returnArray.push(notes[i].text);
    }
    return returnArray.join(', ');
  }

  return {
    notes: notes,
    newNote: newNote,
    displayNotes: displayNotes,
  }
}
