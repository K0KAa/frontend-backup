var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showinnerText = firstItem.innerText;

var msg = '<p> textContent: ' + showTextContent + '</p>';
msg += '<p> innerText: ' + showinnerText + '</p>';
var el = document.getElementById('two');
el.innerHTML = msg;
firstItem.textContent = 'sourdough bread'; 