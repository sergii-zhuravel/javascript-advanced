// Задача 6.1
// Дано:
// HTML страница в которой есть только такой код
/* <div> */
//   <span>Browser name: </span><span>BROWSERNAME</span>
// </div>
// Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента

var elems = document.getElementsByTagName("span");
elems[1].innerHTML = window.navigator.userAgent;

var ba = ["Firefox","OPR","Chrome","Safari","MSIE","Trident","Edge"];
var b, ua = window.navigator.userAgent;
for (var i=0;i<ba.length;i+=1) {
	if ( ua.indexOf( ba[i] )> -1) {	
		b = ba[i];
		break;				
	}
};

switch (b) {
    case "OPR": b= "Opera";break;
    case "Trident"||"MSIE"||"Edge": b = "Internet Explorer";break;
    case "MSIE": b = "Internet Explorer";break;
    case "Edge": b = "Internet Explorer";break;
}

document.write("You are using "+b+" browser");