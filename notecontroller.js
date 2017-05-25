function NoteController(list){

    var html = new buildHTML();
    var htmlList = html.getHTML(list.notes);
    console.log(htmlList)
    return document.getElementById("app").innerHTML = htmlList;
};
