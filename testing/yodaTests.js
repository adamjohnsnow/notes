(function(exports){
  console.log('Episode 1: Basic unit tests')
  var string = "My favourite testing framework is from Dagobah",
      note = new Note(string, 0),
      noteList = new NoteList();
      noteListView = new buildHTML();

    sameTheyAre('Contains a string', note.text, string)
    sameTheyAre('Using .text prints the string', note.textPrint(), string)

    var note1 = { text: 'Here is a note', id: 0 };
    noteList.newNote('fakenote', note1);
    sameTheyAre('Making new note pushes to array', noteList.notes[0], note1)

    noteList.newNote('fakenote', { text: 'Another note', id: 1 });
    sameTheyAre('Displays all notes in list', noteList.displayNotes(), "Here is a note, Another note")

    var htmlString = '<ul><li><a href="#2">Here is a note...</a></li><li><a href="#3">Here is another note...</a></li></ul>';
    var fakeNoteList = [{ text: 'Here is a note', id: 2}, { text: 'Here is another note', id: 3}]
    sameTheyAre('Produces string of HTML with notes', noteListView.getHTML(fakeNoteList), htmlString);

    var htmlStringOneNote = '<ul><li><a href="#2">Here is a note...</a></li></ul>';
    var fakeNoteObject = [{ text: 'Here is a note', id: 2}]
    sameTheyAre('Produces string of HTML with one note', noteListView.getHTML(fakeNoteObject), htmlStringOneNote);

    var htmlStringNoNotes = '<ul></ul>';
    var fakeNoNote = [];
    sameTheyAre('Does not produce string of HTML with no note', noteListView.getHTML(fakeNoNote), htmlStringNoNotes);

})();
