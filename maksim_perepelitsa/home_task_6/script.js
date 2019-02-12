document.addEventListener('DOMContentLoaded', function(){
	//6.1
console.log(navigator.userAgent);

var myElem = document.querySelector('div').children[1];
myElem.textContent = navigator.userAgent;

//6.2
var lChild = document.body.lastElementChild;
var styles = window.getComputedStyle(lChild);

})

if(document.body.children.length===0){
	console.log('body contains 0 elements');
}