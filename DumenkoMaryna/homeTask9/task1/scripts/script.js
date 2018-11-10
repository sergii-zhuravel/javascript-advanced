document.addEventListener("DOMContentLoaded", function(){

    if(getCookie('loginName')) {
        document.getElementById("loginName").innerHTML = getCookie('loginName');
        document.getElementById("userLogIn").style.display = "block";
    } else {
        document.getElementById("userLogOut").style.display = "block";
    }

    function getCookie(key) {
        var cs = document.cookie.split('; ');
        for(var i = 0; i < cs.length; i++) {
            var cookieKeyValue = cs[i].split('=');
            if (cookieKeyValue[0] === key) return cookieKeyValue[1];
        }
        
        return null;
    }
    
    function setCookie(key, value, expires) {
      var date  = new Date;
      date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
      document.cookie = key + '=' + value + ';path=/;expires=' + date.toUTCString();
    }

    function deleteCookie(key) {
      setCookie(key, '', -1);
    }

    function userLogOut() {
       deleteCookie('loginName');
       location.reload();
    }

    function userLogIn() {
        var enterName =  document.getElementById("enterLoginName").value;
        if(enterName) {
            setCookie('loginName', enterName , 3);
            location.reload();
        } else {
            alert("Please enter name");
        }
    }

    document.getElementById("logOut").addEventListener('click', function(event) {
        userLogOut();
    })

    document.getElementById("logIn").addEventListener('click', function(event) {
        userLogIn();
    })
});
