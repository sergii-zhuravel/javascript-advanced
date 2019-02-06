//Как получить доступ к стилям последнего элемента тега body?

var lastBodyElementStyle = document.body.lastElementChild.style;

//Как проверить что в body вообще есть элементы?
if (document.body.firstElementChild != null) {
    console.log("body includs element");
} else {
    console.log("body is clean");
}