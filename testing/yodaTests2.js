(function(exports){
  console.log('Episode II : Features and more complex tests')
  var string = "My favourite testing framework is from Dagobah",
      note = new Note(string, 0),
      noteList = new NoteList();
      noteListView = new buildHTML();

    var htmlString = '<ul><li><a href="#2">Here is a note...</a></li><li><a href="#3">Another note...</a></li></ul>';
    var fakeNoteList = {notes: [{ text: 'Here is a note', id: 2 }, { text: 'Another note', id: 3 }]}
    noteController = new NoteController(fakeNoteList);
    sameTheyAre('FEATURE: Updates HTML element', document.getElementById('app').innerHTML, htmlString)

    idArray = fakeNoteList.notes.idMap.join()
    sameTheyAre('note list now has idMap', idArray, "2,3")

    singleNote = new SingleNote(fakeNoteList.notes[0])
    sameTheyAre('Displays a single note', document.getElementById('app').innerHTML, 'Here is a note')

    testList = new NoteList();
    testList.newNote("testNote");
    testList.newNote("testNote2");
    sameTheyAre('Adds unique ID to every note created in the same list', testList.notes[0].id, 0);
    sameTheyAre('Adds unique ID to every note created in the same list', testList.notes[1].id, 1);

    var htmlString = '<ul><li><a href="#2">Here is a note that ...</a></li><li><a href="#4">Here is another note...</a></li></ul>';
    var fakeNoteList = {notes: [{ text: 'Here is a note that is really too long to be displayed properly', id: 2 }, { text: 'Here is another note that is also a bit too long', id: 4 }]}
    noteController = new NoteController(fakeNoteList);
    sameTheyAre('Just the first 20 characters', document.getElementById('app').innerHTML, htmlString)


})();
