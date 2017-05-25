'use strict';

function buildHTML() {

  const getHTML = function(noteArray){
    if (noteArray.length === 0) {
      return '';
    } else {
      var i = 0;
      var htmlString = '';
      for (i in noteArray){
        var htmlString = htmlString + '<li><a href=#"' + Number(noteArray[i].id) + '">' + noteArray[i].text.substring(0, 20) + '</a></li>'
      }
        return htmlString = '<ul>' + htmlString + '</ul>'
    };
  };

  return {
    getHTML: getHTML
  };
};
