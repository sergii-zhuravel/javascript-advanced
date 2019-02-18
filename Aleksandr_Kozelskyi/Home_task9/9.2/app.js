var logInWindow = document.querySelector("#log-in");
var logOutWindow = document.querySelector("#log-out");
logInWindow.style.display = "none";
logOutWindow.style.display = "none";
var logInBtn = document.querySelector("#log-in-btn");
var logOutBtn = document.querySelector("#log-out-btn");

function addLoginName() {
  var logInInput = document.querySelector("#loginName");
  localStorage.setItem("loginName", logInInput.value);
  document.location.reload(true);
}

function delLoginName() {
  localStorage.removeItem("loginName");
  document.location.reload(true);
}

if (localStorage.getItem("loginName")) {
  logOutWindow.firstChild.textContent =
    "Добро пожаловать на наш сайт " + localStorage.getItem("loginName") + "!";
  logOutWindow.style.display = "";
} else {
  logInWindow.style.display = "";
}

logInBtn.addEventListener("click", addLoginName);
logOutBtn.addEventListener("click", delLoginName);
