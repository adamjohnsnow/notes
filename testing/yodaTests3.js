(function(exports){

  console.log('Episode III : User interface');

  var list = new NoteList();
  list.newNote('Here is a first note to test.');
  list.newNote('A second note would be good too.');
  list.newNote('Third time\'s the charm.');
  list.newNote('What do we think about four notes?');
  var listeners = new Listeners(list)
  var controller = new NoteController(list)

  window.onload = function() {
    document.getElementById('newNote').value = "Test a new note"
    document.getElementById('Submit').click();
    sameTheyAre('adds new note', list.notes.length, 5)
  }

  var htmlString = '<ul><li><a href="#2" id="testlink">test</a></li></ul>';
  document.getElementById('app').innerHTML = htmlString;
  document.getElementById('testlink').click();
  myURL = "file:///Users/adamsnow/onedrive/macbook/coding/weekly_projects/notes/yodaRunner.html#2"
  sameTheyAre('changes page from onclick event', window.location.href, myURL)

  setTimeout(function(){
    htmlString = document.getElementById('app').innerHTML;
    sameTheyAre('page content changes on click', htmlString, 'Third time\'s the charm.')
  }, 4)

})();
