// Задача 6.2
// Как получить доступ к стилям последнего элемента тега body?
// Как проверить что в body вообще есть элементы?
// (написать код)

var elemsInBody, lastElemStyle, lastElem;
lastElem = document.body.children[document.body.children.length-1];
lastElemStyle = lastElem.style;
console.log( lastElem );
lastElemStyle.padding = "5px 10px";
lastElemStyle.backgroundColor = "darkred";
lastElemStyle.color = "white";
lastElemStyle.border = "none";
lastElemStyle.borderRadius = "5px";

console.log( "Elements in head: " + document.head.children.length );
console.log( "Elements in body: " + document.body.children.length);


