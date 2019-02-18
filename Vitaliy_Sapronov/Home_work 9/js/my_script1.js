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

function setCookie(name, value, options) {
    options = options || {};
  
    var expires = options.expires;
  
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    value = encodeURIComponent(value);
  
    var updatedCookie = name + "=" + value;
  
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    document.cookie = updatedCookie;
}
    
function getCookie (name) {
    var cookies = document.cookie.split("; ");
    for (var i=0; i<cookies.length; i++) {
        var keyValue = cookies[i].split('=');
        if (keyValue[0] === name) {
            blockWelcome.style.display = 'block';
            welcomeName.innerHTML = "Добро пожаловать на наш сайт" +" "+ keyValue[1];
        }
        else {
            blockName.style.display = 'block';
            break
        }
    }
}

function deleteCookie(name) {
    setCookie(name, "", {
      expires: -1
    })
  }

var blockName = document.getElementById('name');
var blockWelcome = document.getElementById('welcome');
var welcomeName = document.getElementById('welcome').firstElementChild;

window.onload = getCookie('loginName');

function addCookie() {
    var value = document.getElementById('name-input').value;
    setCookie('loginName', value);
    blockName.style.display = '';
}

function logOut() {
    blockWelcome.style.display = '';
    deleteCookie ('loginName');
    location.reload();
}
