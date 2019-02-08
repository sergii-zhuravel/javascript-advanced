function Cat(name){
   this.name = name,
   this.species = 'Cat',
   this.talk = function(){alert('Meow')} 
}
var tom = new Cat('Tom');
var jerry = new Cat('Jerry');
var tim = new Cat('Tim');

tom.talk();