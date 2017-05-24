function NoteController(list){

    var html = new buildHTML();
    var htmlList = html.getHTML(html.buildNoteArray(list.notes));

    return document.getElementById("app").innerHTML = htmlList;

    return {
      htmlList: htmlList,
      displayHTML: displayHTML
    }
};
