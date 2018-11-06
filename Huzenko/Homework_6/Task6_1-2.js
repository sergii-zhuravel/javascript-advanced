// Задача 6.1
// ------------------------
//  Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента
//  ------------------------
// Задача 6.2
// ------------------------
// Как получить доступ к стилям последнего элемента тега body?
// Как проверить что в body вообще есть элементы?
// (написать код)



// Задача 6.1
var bName = document.getElementsByTagName('span');
bName[1].innerHTML = window.navigator.userAgent;



// Задача 6.2
// 1)
var lastElem = document.getElementsByTagName('div');
var x = lastElem[lastElem.length-1];
var lastElementStyle = x.style;

// 2)
for (var i = 0; i < document.body.childNodes.length; i++) {
    alert( document.body.childNodes[i]); 
}



