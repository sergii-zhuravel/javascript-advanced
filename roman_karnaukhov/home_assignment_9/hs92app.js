// проверка наличия поля loginName.
function ifLoginName() {
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === "loginName") {
      privett(localStorage.getItem("loginName"));
      return;
    }
  }
  setLoginName();
}

// установка поля loginName в случае если его нет.
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
    localStorage.setItem("loginName", formLogin.value);
    formLogin.value = "";
  };
  document.body.appendChild(formSubmit);
}

//"привет" и выход с удалением поля из localStorage.
function privett(name) {
  var privet = document.createTextNode(
    "Привет " + name + " ! Для выхода нажмите кнопку >>> "
  );
  document.body.appendChild(privet);

  var exitSubmit = document.createElement("input");
  exitSubmit.setAttribute("type", "submit");
  exitSubmit.setAttribute("value", "сигнал водителю");
  exitSubmit.onclick = function() {
    localStorage.removeItem("loginName");
    location.reload();
  };
  document.body.appendChild(exitSubmit);
}

ifLoginName();

// ------------------------
// Задача 9.2
// ------------------------
// Реализовать 9.1 с помощью localStorage
