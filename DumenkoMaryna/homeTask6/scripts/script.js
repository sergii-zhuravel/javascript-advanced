// Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента

document.getElementsByTagName('div')[0].children[1].innerHTML = navigator.userAgent;


// ------------------------
// Задача 6.2
// ------------------------
// Как получить доступ к стилям последнего элемента тега body?
// Как проверить что в body вообще есть элементы?
// (написать код)

var lastElementStyle = document.body.lastElementChild.style; 

if(document.body.children.length) {
    console.log("Body has elements")
} else {
    console.log("Body is empty")
}
