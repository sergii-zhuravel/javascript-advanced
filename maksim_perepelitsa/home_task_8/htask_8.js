//8.1


//1
/* если скрипт выполнить перед </body> Сначала выведет в консоль сообщение из myFunction, потом сообщение снаружи myFunction
если скрипт выполнить в head, по идее сначала выдаст код снаружи myFunction, потом код внутри myFunction, правда здесь получается наоборот,
может потому что DOM быстро грузится.
*/

//8.2
/*
из-за замыкания, todoitemtemplate сохранился в scope внешней функции, к которому обращается функция addItem
*/
