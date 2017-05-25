function Listeners(list) {

  (function changeCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  })();

  (function stopSubmits() {
    window.addEventListener("submit", function(event){
      event.preventDefault();
      list.newNote(event.target.newNote.value);
      return controller = new NoteController(list);
    }, false)
  })();

  function showNoteForCurrentPage() {
    showNote(changePath(window.location));
  };

  function changePath(location) {
    var noteId = Number(location.hash.split("#")[1]);
    return list.notes.idMap.indexOf(noteId);
  };

  function showNote(note) {
    document
    .getElementById("app")
    .innerHTML = list.notes[note].text;
  }
}
