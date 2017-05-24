(function NoteController(list){

    var html = new buildHTML();
    var htmlList = html.getHTML(html.buildNoteArray(list.notes));
    this.list = list

    return document.getElementById("app").innerHTML = htmlList;
})();

NoteController.prototype.selectNote = function(id){
  for (note in this.list.notes) {
    if(this.list.notes[note].id == id){
      console.log(this.list.notes[note].id, this.list.notes[note].text);
      return document.getElementById('app').innerHTML = this.list.notes[note].text;
    };
  };
};
