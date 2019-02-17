// Задача 9.1
// Написать простую реализацию авторизацию с использованием document.cookie
// Например авторизационную куки можно назвать loginName
// При первом посещении страницьі если куки loginName еще нет, то показьіваем поле ввода (input) c сообщением - Ведите имя
// Если куки loginName уже существует и в нем есть значение - показьіваем приветствие
// -- Добро пожаловать на наш сайт (значение из loginName) --
// и показьіваем кнопку - Log out, при нажатии на которую нужно:
// 1. Удалить куки loginName (учили на занятии как и написали функцию)
// 2. Перезагрузить страницу  (js код - location.reload(); )

// Задача 9.2
// Реализовать 9.1 с помощью localStorage
    
function getItem(name) {
  if (!localStorage.getItem(name)){
    blockName.style.display = 'block';
    // break
  }
  else {
    blockWelcome.style.display = 'block';
    welcomeName.innerHTML = "Добро пожаловать на наш сайт" +" "+ localStorage.getItem(name);
  }
}

var blockName = document.getElementById('name');
var blockWelcome = document.getElementById('welcome');
var welcomeName = document.getElementById('welcome').firstElementChild;

window.onload = getItem('loginName');


function addCookie() {
    var value = document.getElementById('name-input').value;
    localStorage.setItem('loginName', value);
    blockName.style.display = '';
}

function logOut() {
    blockWelcome.style.display = '';
    localStorage.removeItem('loginName');
    location.reload();
}
