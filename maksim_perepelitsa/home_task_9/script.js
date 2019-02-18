var input = document.getElementById('myInput');
var logOutBtn = document.getElementById('logOut');
//9.1
/*function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function checkForAuth(){
	var loginPresent = false;
	var name;
	var test = document.cookie.split('; ');
	var test2 = test.map(function(cur){
		return cur.split('=');
	});
	//console.log(test);
	console.log(test2);
	test2.forEach(function(cur){
		if(cur[0]=='loginName'){loginPresent = true; name=cur[1] }
	});

	if(loginPresent){
		alert("Добро пожаловать на наш сайт "+name);
		logOutBtn.style.display = 'block';
	}else{
		input.style.display = 'block';
	}
}

logOutBtn.addEventListener('click', function(){
	delete_cookie("loginName");
	location.reload();
});

input.addEventListener('keydown', function(e){
	if(e.keyCode==13){
		document.cookie = "loginName=" + e.target.value + ";";
		e.target.value = "";
	}
});

checkForAuth();*/

//9.2

function lStorageAuth(){
	var loginInfo = localStorage.getItem('loginName');
	
	if(loginInfo===null){
		input.style.display = 'block';
	}else{
		alert("Добро пожаловать на наш сайт "+ loginInfo);
		logOutBtn.style.display = 'block';
	}
}

lStorageAuth();

input.addEventListener('keydown', function(e){
	if(e.keyCode==13){
		localStorage.setItem('loginName', e.target.value);
		e.target.value = "";
	}
});

logOutBtn.addEventListener('click', function(){
	localStorage.removeItem('loginName');
	location.reload();
});

