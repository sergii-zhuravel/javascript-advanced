
var arr =  [];
var text = prompt("Введіть слово на перевірку паліндрому ?");
text.split('');
for(let i = 0;i<=text.length;i++){
    arr.push(text[i]);
}
arr.reverse();
var str = arr.join('');
alert(str);