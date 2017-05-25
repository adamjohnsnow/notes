function NoteController(list){
  var notes = list.notes;

  (function changeCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  })();

  function showNoteForCurrentPage() {
    showNote(changePath(window.location));
  };

  function changePath(location) {
    var noteId = Number(location.hash.split("#")[1]);
    return notes.idMap.indexOf(noteId);
  };

  function showNote(note) {
    document
    .getElementById("app")
    .innerHTML = notes[note].text;
  };

  var html = new buildHTML();
  var htmlList = html.getHTML(notes);
  return document.getElementById("app").innerHTML = htmlList;

};
