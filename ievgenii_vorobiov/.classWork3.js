//=====================================================================


// CLASS WORK

// hasOwnProperty().__proto__;
// Object.create();

// function Hamster() {
//  this.stomach = [];
//  this.__proto__ = new HamsterActions();
// }

// function HamsterActions () {
//     this.lookForFood = (f) => {
//         this.stomach.push(f);
//     }
//     this.hungry = () => {
//         return ! this.stomach.length;
//        return this.stomach.length == 0 ? "Yes" : "No";
//     }
// }

Hamster.prototype.lookForFood = f => {
	this.stomach.push(f);
  };
  Hamster.prototype.hungry = () => {
	return !this.stomach.length;
  };
  
  a = new Hamster();
  a.lookForFood("apples");
  console.log(a);
  
  
  
  
  
  