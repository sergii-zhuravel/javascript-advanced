document.addEventListener("DOMContentLoaded", function(){
    var loginBlock = document.getElementById('login_block');
    var logoutBlock = document.getElementById('greeting_block');

    if(getCookie('loginName')) {
        loginBlock.style.display = "none";
        logoutBlock.style.display = "block";
    } else {
        loginBlock.style.display = "block";
        logoutBlock.style.display = "none";
    }

    function getCookie(key) {
        var cs = document.cookie.split('; ');
        for(var i = 0; i < cs.length; i++) {
            var cookieKeyValue = cs[i].split('=');
            if (cookieKeyValue[0] === key) return cookieKeyValue[1];
        }
        return null;
    };

    document.getElementById('login').addEventListener('click', function() {
        var userNickName = document.getElementById('nameUser').value;
        setCookie('loginName', userNickName, 1);
        console.log(userNickName)
        loginBlock.style.display = "none";
        logoutBlock.style.display = "block";
        document.getElementById('nameUser').value = '';
        location.reload();
    });

    document.getElementById('logout').addEventListener('click', function() {
        deleteCookie('loginName');
        loginBlock.style.display = 'block';
        logoutBlock.style.display = 'none';
        location.reload();
    });

    function setCookie(name, value, expires){
        var d = new Date();
        d.setTime(d.getTime() + (expires*24*60*60*1000));
        var day = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + day + ";path=/";
    }
    // deleteCookie('loginName');
    function deleteCookie(name) {
        setCookie(name, "", -1)
    }
});

// Task-2

// document.addEventListener("DOMContentLoaded", function(){
//     var loginBlock = document.getElementById('login_block');
//     var logoutBlock = document.getElementById('greeting_block');

//     if(localStorage.getItem('loginName')) {
//         loginBlock.style.display = "none";
//         logoutBlock.style.display = "block";
//     } else {
//         loginBlock.style.display = "block";
//         logoutBlock.style.display = "none";
//     }

//     document.getElementById('login').addEventListener('click', function() {
//         var userNickName = document.getElementById('nameUser').value;
//         localStorage.setItem('loginName', userNickName);
//         loginBlock.style.display = "none";
//         logoutBlock.style.display = "block";
//         document.getElementById('nameUser').value = '';
//     });

//     document.getElementById('logout').addEventListener('click', function() {
//         localStorage.clear();
//         loginBlock.style.display = 'block';
//         logoutBlock.style.display = 'none';
//         location.reload();
//     });
// });

