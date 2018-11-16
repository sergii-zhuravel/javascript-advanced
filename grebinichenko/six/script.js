document.getElementsByTagName('div')[0].lastElementChild.innerText = navigator.userAgent;


var numberElem = document.body.childElementCount;

if (numberElem > 0) {
    console.log('Amount of elements ' + numberElem);
} else {
    console.log('No body elements');
}