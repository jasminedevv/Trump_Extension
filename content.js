function changeText(text) {
  switch (true) { //detect the length and get a fun fact from the appropriate array
    case (text.length < 40):
      replacedText = shortest[Math.floor((Math.random() * shortest[0]) + 1)];
      break;
    case (text.length < 80):
      replacedText = shortSentences[Math.floor((Math.random() * shortSentences[0]) + 1)];
      break;
    case (text.length < 120):
      replacedText = longSentences[Math.floor((Math.random() * longSentences[0]) + 1)];
      break;
    default:
      replacedText = shortParagraphs[Math.floor((Math.random() * shortParagraphs[0]) + 1)];
  }
  element.replaceChild(document.createTextNode(replacedText), node); // replace the text with the replaced text
  $(element).addClass('ITORM-changed'); //and add a special css style
}

var elements = document.getElementsByTagName('*'); //get all the elements from the document

var noSpanCount = 0; //for debugging
var spanCount = 0;

for (var i = 0; i < elements.length; i++) { //for each element
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) { //for each
    var node = element.childNodes[j];
    if (node.nodeValue != null) {
      if (node.nodeValue.indexOf('Trump') >= 0 && node.nodeType === 3 && node.nodeName !== 'SPAN' && node.parentNode.nodeName !== 'SPAN') { //if it's a non-span text node with Trump in it
        changeText(node.nodeValue);
        /* None of this span grabbing stuff works and I don't know why but the extension is still functional*/
      } else if (node.nodeValue.indexOf('Trump') >= 0 && node.nodeName == 'SPAN' && node.parentNode.nodeName != null) { // else if it's a span node with a parent
        changeText(node.parentNode.nodeValue); // change the text of it's parent node
        console.log("span #" + spanCount);
        spanCount++;
      }
    }
  }
}
