document.addEventListener("DOMContentLoaded", function(){
    if(localStorage['loginName']) {
        document.getElementById("loginName").innerHTML = localStorage['loginName'];
        document.getElementById("userLogIn").style.display = "block";
    } else {
        document.getElementById("userLogOut").style.display = "block";
    }

    function userLogOut() {
        localStorage.removeItem('loginName');
        location.reload();
    }

    function userLogIn() {
        var enterName =  document.getElementById("enterLoginName").value;
        if(enterName) {
            localStorage['loginName'] = enterName;
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
