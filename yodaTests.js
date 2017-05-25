(function(exports){
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


    var htmlString = '<ul><li><a href="#2" id="testlink">Here is a note that ...</a></li><li><a href="#4">Here is another note...</a></li></ul>';
    document.getElementById('app').innerHTML = htmlString;
    document.getElementById('testlink').click();
    myURL = "file:///Users/adamsnow/onedrive/macbook/coding/weekly_projects/notes/yodaRunner.html#2"
    sameTheyAre('changes page from onclick event', window.location.href, myURL)

    setTimeout(function(){
      htmlString = document.getElementById('app').innerHTML;
      sameTheyAre('page content changes on click', htmlString, 'Here is a note that is really too long to be displayed properly')
    }, 1)
})();
