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

function getStatus(){
    if (document.cookie.indexOf('loginName') + 1){ // loginName cookie exists
        var loginNameCookieValue = getCookieValue('loginName');
        sayHello(loginNameCookieValue);
        document.getElementsByClassName('logout')[0].classList.add("active");
    } else {
        document.getElementsByClassName('login')[0].classList.add("active");
    }
}

function sayHello(name){
    var welcome = document.createElement("h1");
    var welcomeText = document.createTextNode('Добро пожаловать на наш сайт '+name);
        welcome.append(welcomeText);

    document.body.prepend(welcome);
}

function getCookieValue(cookieName){
    var match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    if (match) return match[2];
}

function login(){
    var nameValue = document.getElementById('loginName').value;
    document.cookie = "loginName="+nameValue;
    window.location.reload();
}

function logout(){
    document.cookie = 'loginName=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload();
}

getStatus();

// ------------------------
// Задача 9.2
// ------------------------
// Реализовать 9.1 с помощью localStorage

function getStatus(){
    if (localStorage.getItem("loginName")){ // loginName cookie exists
        var loginNameCookieValue = localStorage.getItem("loginName");
        sayHello(loginNameCookieValue);
        document.getElementsByClassName('logout')[0].classList.add("active");
    } else {
        document.getElementsByClassName('login')[0].classList.add("active");
    }
}

function sayHello(name){
    var welcome = document.createElement("h1");
    var welcomeText = document.createTextNode('Добро пожаловать на наш сайт '+name);
        welcome.append(welcomeText);

    document.body.prepend(welcome);
}

function login(){
    var nameValue = document.getElementById('loginName').value;
    localStorage.setItem("loginName", nameValue);
    window.location.reload();
}

function logout(){
    localStorage.removeItem("loginName");
    window.location.reload();
}

getStatus();