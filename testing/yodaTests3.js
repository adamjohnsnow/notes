(function(exports){
  window.onload = function(){

  console.log('Episode III : User interface');

  var list = new NoteList();
  list.newNote('Here is a first note to test.');
  list.newNote('A second note would be good too.');
  list.newNote('Third time\'s the charm.');
  list.newNote('What do we think about four notes?');
  var controller = new NoteController(list)

    document.getElementById('newNote').value = "Test a new note"
    setTimeout(function(){
      document.getElementById('submit').click
      htmlString = document.getElementById('app').innerHTML;
      var testHTML = '<ul><li><a href="#4">Test a new note...</a></li></ul>'
      console.log(htmlString)
      sameTheyAre('adds new note', htmlString, testHTML)
    }, 4)

  var htmlString = '<ul><li><a href="#2" id="testlink">Here is a note that ...</a></li><li><a href="#4">Here is another note...</a></li></ul>';
  document.getElementById('app').innerHTML = htmlString;
  document.getElementById('testlink').click();
  myURL = "file:///Users/adamsnow/onedrive/macbook/coding/weekly_projects/notes/yodaRunner.html#2"
  sameTheyAre('changes page from onclick event', window.location.href, myURL)

  setTimeout(function(){
    htmlString = document.getElementById('app').innerHTML;
    sameTheyAre('page content changes on click', htmlString, 'Third time\'s the charm.')
  }, 1)
}
})();
