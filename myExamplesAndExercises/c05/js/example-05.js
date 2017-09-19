

// cria um novo elemento no final

var list = document.getElementsByTagName('ul')[0];

var newItemFinal = document.createElement('li');
var newTextFinal = document.createTextNode('Apple');
newItemFinal.appendChild(newTextFinal);
list.appendChild(newItemFinal);


var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('Banana');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// tranforma todas em cool

var itensCool = document.querySelectorAll('li');

for (var i = 0; i < itensCool.length; i++) {
    itensCool[i].className = 'cool';
}