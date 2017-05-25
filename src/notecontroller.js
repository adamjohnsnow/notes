function NoteController(list){

  var notes = list.notes;

  var html = new buildHTML();
  var htmlList = html.getHTML(notes);
  return document.getElementById("app").innerHTML = htmlList;

};
