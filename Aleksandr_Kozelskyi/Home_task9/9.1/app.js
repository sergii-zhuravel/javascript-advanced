var logInWindow = document.querySelector("#log-in");
var logOutWindow = document.querySelector("#log-out");
logInWindow.style.display = "none";
logOutWindow.style.display = "none";
var logInBtn = document.querySelector("#log-in-btn");
var logOutBtn = document.querySelector("#log-out-btn");

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

function getCookie(name) {
  var matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function addLoginName() {
  var logInInput = document.querySelector("#loginName");
  setCookie("loginName", logInInput.value);
  document.location.reload(true);
}

function delCookie() {
  setCookie("loginName", "", {expires: -1});
  document.location.reload(true);}

if (getCookie("loginName")) {
  logOutWindow.firstChild.textContent =
    "Добро пожаловать на наш сайт " + getCookie("loginName") + "!";
  logOutWindow.style.display = "";
} else {
  logInWindow.style.display = "";
}

logInBtn.addEventListener("click", addLoginName);
logOutBtn.addEventListener("click", delCookie);
