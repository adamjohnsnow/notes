(function noteController(){


    var html = new buildHTML();
    var list = new NoteList();
    list.newNote("testText1");
    list.newNote("testText2");
    list.newNote("testText3");
    var htmlList = html.getHTML(html.buildNoteArray(list.notes));

    document.getElementById("app").innerHTML = htmlList

})();
