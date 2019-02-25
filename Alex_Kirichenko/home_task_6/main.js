////////////6.1////////////////

document.querySelector("div span:nth-child(2)").innerHTML =
  window.navigator.userAgent;

/////////////6.2//////////////

var elements = document.querySelectorAll("body *");

if (elements.length > 1) {
  console.log(
    "В body есть вот столько: (" + elements.length + ") елементов, а именно: "
  );
  for (var i = 0; i < elements.length - 1; i++) {
    console.log(elements[i]);
  }
  var lastElement = elements.length - 2;
  console.log(elements[lastElement].style.color);
  console.log(window.getComputedStyle(elements[lastElement]));
} else {
  console.log("В body нет елементов. Есть только тег скрипт.");
}
