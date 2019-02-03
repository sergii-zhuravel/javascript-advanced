// Задача 6.1
// Дано:
// HTML страница в которой есть только такой код
// <div>
//   <span>Browser name: </span><span>BROWSERNAME</span>
// </div>

// Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента

function rename() {
  document.body.firstElementChild.lastElementChild.innerHTML = window.navigator.appVersion;
}

// Задача 6.2
// Как получить доступ к стилям последнего элемента тега body?
// Как проверить что в body вообще есть элементы?
// (написать код)

function checkEl() {
    for (var i = 0; i < document.body.children.length; i++) {
      document.body.firstElementChild.appendChild(document.createElement('p'));
      document.body.firstElementChild.lastElementChild.innerHTML = document.body.children[i];
    }
}


// Сделал предыдуший элемент, так как последний у меня скрипт
function lastBody() {
  document.body.lastElementChild.previousElementSibling.style.display = 'flex';
  document.body.lastElementChild.previousElementSibling.style.backgroundColor = 'lightgray';
}

