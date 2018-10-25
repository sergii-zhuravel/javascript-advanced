// Задача 6.1
// ------------------------
// Дано:
// HTML страница в которой есть только такой код
// <div>
//   <span>Browser name: </span><span>BROWSERNAME</span>
// </div>

// Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента


var browser = document.getElementsByTagName("span")[1];

var userAgent = window.navigator.userAgent;

// last word in userAgent
var nameVersion =userAgent.split(" ").splice(-1).join("");

// only browser name 
var reg = /[a-zA-Z]/g;
var name = nameVersion.match(reg).join("")=="OPR" ? "Opera" : nameVersion.match(reg).join("");

browser.innerText = name;


// ------------------------
// Задача 6.2
// ------------------------
// Как получить доступ к стилям последнего элемента тега body?
// Как проверить что в body вообще есть элементы?
// (написать код)



var body = document.documentElement.lastElementChild; 

var elements = (body.children.length )? "body is NOT empty" : "body is empty"
if (elements){
    var style = document.documentElement.lastElementChild.lastElementChild.style;   
    console.log(style)
}

console.log(elements);