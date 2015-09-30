
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      if (text.indexOf('Trump') >= 0) {
        if (text.length < 40) {
          replacedText = shortest[Math.floor((Math.random() * shortest[0]) +1)];
        } else if (text.length < 80) {
          replacedText = shortSentences[Math.floor((Math.random() * shortSentences[0]) +1)];
        } else if (text.length < 120) {
          replacedText = longSentences[Math.floor((Math.random() * longSentences[0]) +1)];
        } else {
          replacedText = shortParagraphs[Math.floor((Math.random() * shortParagraphs[0]) +1)];
        }
        element.replaceChild(document.createTextNode(" " + replacedText + " "), node);
        $(element).addClass('ITORM-changed');
      }
    }
  }
}
