'use strict';

function NoteList() {
  var notes = [];

  var n = 0

  var newNote = function(text, fakeNote) {
    notes.push(fakeNote || new Note(text, n));
    n = n + 1;
  }

  var displayNotes = function() {
    var note = 0,
    returnArray = [];
    for (note in notes) {
      returnArray.push(notes[note].text);
    }
    return returnArray.join(', ');
  }

  return {
    notes: notes,
    newNote: newNote,
    displayNotes: displayNotes,
  }
}
