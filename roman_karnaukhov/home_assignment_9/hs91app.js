//проверка наличия куки loginName.
function ifLoginName() {
  var coo = document.cookie.split("; ");
  for (var i = 0; i < coo.length; i++) {
    var cooKey = coo[i].split("=");
    if (cooKey[0] === "loginName") {
      privett(cooKey[1]);
      return;
    }
  }
  setLoginName();
}

//"привет" и выход с удалением куки.
function privett(name) {
  var privet = document.createTextNode(
    "Привет " + name + " ! Для выхода нажмите кнопку >>> "
  );
  document.body.appendChild(privet);
  var exitSubmit = document.createElement("input");
  exitSubmit.setAttribute("type", "submit");
  exitSubmit.setAttribute("value", "сигнал водителю");
  exitSubmit.onclick = function() {
    var dat = new Date();
    dat.setTime(dat.getTime() - 10);
    document.cookie = "loginName=  ; expires=" + dat.toUTCString();
    location.reload();
  };
  document.body.appendChild(exitSubmit);
}

//устанавливаем куку loginName
function setLoginName() {
  var vvediteLogin = document.createTextNode("Введите Ваш логин: ");
  document.body.appendChild(vvediteLogin);

  var formLogin = document.createElement("input");
  formLogin.setAttribute("type", "text");
  formLogin.setAttribute("size", "50");
  formLogin.setAttribute("value", "");
  document.body.appendChild(formLogin);

  var formSubmit = document.createElement("input");
  formSubmit.setAttribute("type", "submit");
  formSubmit.onclick = function() {
    var dat = new Date();
    dat.setTime(dat.getTime() + 10 * 60 * 1000); // на 10 мин.
    document.cookie =
      "loginName=" + formLogin.value + "; expires=" + dat.toUTCString();
    formLogin.value = "";
  };
  document.body.appendChild(formSubmit);
}

ifLoginName();

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
