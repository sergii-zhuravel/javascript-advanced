document.addEventListener("DOMContentLoaded", function(event) {
  var logInWindow = document.getElementById("loginWindow");
  var userExists = document.getElementById("userExists");
  var loginButton = document.getElementById("login");
  var logoutButton = document.getElementById("logout");
  var inputValue = document.getElementById("username");

  if (inputValue.value) {
    inputValue.value = "";
  }

  if (!localStorage.getItem("userName")) {
    logInWindow.style.display = "block";
    userExists.style.display = "none";
  } else {
    logInWindow.style.display = "none";
    userExists.style.display = "block";
  }

  function refresh() {
    location.reload();
  }

  loginButton.addEventListener("click", refresh);
  logoutButton.addEventListener("click", refresh);
});

function addRecord() {
  var login = document.getElementById("username").value;
  localStorage.userName = login;
}

function removeRecord() {
  localStorage.removeItem("userName");
}
