'use strict';

function buildHTML() {

  const getHTML = function(noteArray){
      var htmlString = '';
      var idMap = [];
      for (var i = 0; i < noteArray.length; ++i){
        var htmlString = htmlString + '<li><a href="#' + noteArray[i].id + '">' + noteArray[i].text.substring(0, 20) + '...</a></li>'
        idMap.push(noteArray[i].id)
      }
        noteArray.idMap = idMap
        return htmlString = '<ul>' + htmlString + '</ul>'
  };

  return {
    getHTML: getHTML
  };
};
