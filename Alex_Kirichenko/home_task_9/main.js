/////////////9.1////////////

var res = false;
var name = "";
var mes = document.querySelector(".messege");
(function myGetCookie() {
  var strCookie = document.cookie;
  var splStrCookie = strCookie.split("; ");
  for (var i = 0; i < splStrCookie.length; i++) {
    var keyValue = splStrCookie[i].split("=");
    console.log(keyValue[0]);
    console.log(keyValue);
    if (keyValue[0] === "loginName") {
      res = true;
      name = keyValue[1];
    }
  }
})();

function showCookie() {
  document.querySelector("#cookie").style.display = "block";
  document.querySelector("#clearCookie").style.display = "none";
}

function resTrue() {
  document.querySelector("#cookie").style.display = "none";
  mes.innerHTML = "Добро пожаловать на наш сайт " + name;
}

document.querySelector(
  "#clearCookie input[type='button']"
).onclick = function() {
  mes.innerHTML = "";
  var date = new Date(0);
  document.cookie = "loginName=" + name + "; expires=" + date.toUTCString();
  showCookie();
  window.location.reload();
};

function resFalse() {
  showCookie();
  document.querySelector("#cookie input[type='button']").onclick = function() {
    var inpValue = document.querySelector("#cookie input[type='text']").value;
    name = inpValue;
    if (inpValue != "") {
      mes.innerHTML = "Добро пожаловать на наш сайт " + name;
      document.querySelector("#clearCookie").style.display = "block";
      document.cookie = "loginName=" + inpValue;
    }
  };
}
res ? resTrue() : resFalse();

///////////////9.2///////////////

// document.querySelector("#clearCookie").style.display = "none";

// var res = false;
// var name = "";
// var mes = document.querySelector(".messege");

// (function checkLocalStorage() {
//   if (localStorage.loginName) {
//     document.querySelector("#clearCookie").style.display = "block";
//     document.querySelector("#cookie").style.display = "none";
//     mes.innerHTML = "Добро пожаловать на наш сайт " + localStorage["loginName"];
//   } else {
//     document.querySelector("#clearCookie").style.display = "none";
//     document.querySelector("#cookie").style.display = "block";
//   }
// })();

// document.querySelector("#cookie input[type='button']").onclick = function() {
//   var inpValue = document.querySelector("#cookie input[type='text']").value;
//   name = inpValue;
//   if (inpValue != "") {
//     mes.innerHTML = "Добро пожаловать на наш сайт " + name;
//     document.querySelector("#clearCookie").style.display = "block";
//     localStorage.setItem("loginName", inpValue);
//   }
// };

// document.querySelector(
//   "#clearCookie input[type='button']"
// ).onclick = function() {
//   mes.innerHTML = "";
//   localStorage.removeItem("loginName");
//   window.location.reload();
// };
