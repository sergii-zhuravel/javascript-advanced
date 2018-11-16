// ------------------------
// Задача 9.1
// ------------------------
// Написать простую реализацию авторизацию с использованием document.cookie
// Например авторизационную куки можно назвать loginName

// При первом посещении страницьі если куки loginName еще нет, то показьіваем поле ввода (input) c сообщением - Ведите имя

// Если куки loginName уже существует и в нем есть значение - показьіваем приветствие
// -- Добро пожаловать на наш сайт (значение из loginName) --
// и показьіваем кнопку - Log out, при нажатии на которую нужно:
// 1. Удалить куки loginName (учили на занятии как и написали функцию)
// 2. Перезагрузить страницу  (js код - location.reload(); )

console.log(document.cookie);

function getStatus(){
    if (document.cookie.indexOf('loginName') + 1){ // loginName cookie exists
        var loginNameCookieValue = getCookieValue('loginName');
        sayHello(loginNameCookieValue);
    }
}

function sayHello(name){
    var welcome = document.createElement("h1");       
    var welcomeText = document.createTextNode(name);       
        welcome.appendChild(welcomeText);

    document.body.append(welcome);
}

function getCookieValue(cookieName){
    var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    if (match) return match[2];
}

getStatus();

// ------------------------
// Задача 9.2
// ------------------------
// Реализовать 9.1 с помощью localStorage