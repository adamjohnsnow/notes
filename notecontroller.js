function NoteController(list){

    var html = new buildHTML();
    var htmlList = html.getHTML(html.buildNoteArray(list.notes));

    function displayHTML() {
      document.getElementById("app").innerHTML = htmlList;
    }

    return {
      htmlList: htmlList,
      displayHTML: displayHTML
    }
};
