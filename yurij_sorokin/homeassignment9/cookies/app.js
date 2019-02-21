document.addEventListener("DOMContentLoaded", function(event) {
  var logInWindow = document.getElementById("loginWindow");
  var userExists = document.getElementById("userExists");
  var loginButton = document.getElementById("login");
  var logoutButton = document.getElementById("logout");
  var inputValue = document.getElementById("username");
 
  

  if (inputValue.value) { 
    inputValue.value = ''; 
  }

  if (!document.cookie) {
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

function getCookie(key) {
    var cs = document.cookie.split("; ");
    for (var i = 0; i <= cs.length; i++) {
      var cookieKeyValue = cs[i].split("=");
      if (cookieKeyValue[0] === key) return cookieKeyValue[1];
    }
    return null;
  }
  
  function setCookie(key, value, expires) {
    var login = document.getElementById("username").value;
    console.log(login);
    value = login;
    var date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + ";path=/;expires=" + date.toUTCString();
    
  }
  
  function deleteCookie(key) {
    setCookie(key, "", -1);
  }