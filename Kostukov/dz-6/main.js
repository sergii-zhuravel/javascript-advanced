/**** 6.1 */

document.getElementsByTagName('span')[1].innerHTML = navigator.userAgent;

/** 6.2 */

document.getElementsByTagName('span')[1].style.color = "red";

var isElems = document.body.firstElementChild.childElementCount;

var isChildElems = isElems > 0 ? 'body have elems' : 'body havent elems ';

console.log(isChildElems);