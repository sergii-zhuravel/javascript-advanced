document.addEventListener('DOMContentLoaded', () => {


    var login = document.getElementById('login');
    var logout = document.getElementById('logout');
    var input = document.getElementById('userName');

    if (localStorage['loginName']) {
      document.getElementById('isLoginned').style.display = 'block';
      document.getElementById('loginName').innerHTML = localStorage['loginName'];
    } else {
      document.getElementById('isNoLogin').style.display = 'block';
    }

    login.onclick = () => {
      var loginValue = input.value;
      localStorage['loginName'] = loginValue;
      location.reload();
    }
    logout.onclick = () => {
      localStorage.removeItem('loginName');
      location.reload();
    }
});