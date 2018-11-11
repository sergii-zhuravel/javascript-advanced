// Task-6.1

document.getElementsByTagName('div')[0].lastElementChild.innerText = navigator.userAgent;

// Task-6.1
document.body.lastElementChild.style.color='gren';

var quantityElem = document.body.childElementCount;
if (quantityElem > 0) {
    console.log('Amount of elements ' + quantityElem);
} else {
    console.log('No body elements');
}