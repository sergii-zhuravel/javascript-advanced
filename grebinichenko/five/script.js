class Man{
    constructor(){
        console.log('Hi man');
    }
}
var bob = new Man();

class SuperMan{
    constructor(SuperName, SuperPower){
        this.SuperName=SuperName;
        this.SuperPower=SuperPower;
        console.log('I am a '+SuperName+' and my super power is '+SuperPower);
    }
}
var bruec = new SuperMan('goMen','goPro');


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' дає голос.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ' гавчить.');
    }
  }
  
  class Terer extends Dog {
    speak() {
      console.log(this.name + ' гавчить.'+'Злісно гавчить.');
    }
  }
  var d = new Terer('Шерлок');
  d.speak();