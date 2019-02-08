window.onload = function () {
  // наличие элементов в body
  document.body.firstElementChild ? console.log ('body has elements') : console.log ('body has NO elements');
  // получаем стиль последнего эдемента;
  var stl = getComputedStyle (document.body.lastElementChild);
  console.log (stl);
}


// ------------------------
// Задача 6.2
// ------------------------
// Как получить доступ к стилям последнего элемента тега body?
// Как проверить что в body вообще есть элементы?
// (написать код)
