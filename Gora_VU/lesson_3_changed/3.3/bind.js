//bind
var user = {
    name: "User",
    sayHi: function(){
        console.log( "Hello, "+this.name );
    },
    a : confirm('Close the window?'),
    closeTheWindow: function() {
    	(this.a) ? window.close() : console.log('tab is opened');
    }

}
var anotherUser = {
	name: "another User"
}
var bound = user.sayHi.bind(user);
setTimeout(bound,1000);//чтобы вызвать функцию setTimeout, нужно связать метод объекта с контекстом
user.closeTheWindow();
var wrapped = user.sayHi.bind(anotherUser);
setTimeout(wrapped,1000);
// //2nd example
var item = document.querySelectorAll('.item');
	var square = item[0];

	var user = {
		random: function() {
			var arr = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
			var color = "#";
			for (var i=0;i<6;i+=1) {
				color += (arr[Math.floor(Math.random()*arr.length)]);
			}
			return color;
		},
   	 	changeColor: function(){
	        square.style.backgroundColor = this.random();
    	}
}
user.changeColor();
var bound = user.changeColor.bind(user);
setInterval(bound,1000);
