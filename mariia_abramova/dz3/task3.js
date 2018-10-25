function f() {
    console.log(String(this));
}
  
var b = f.bind("bind");//string => bind
b()

var c = f.call("call");//string => call


var c = f.apply("apply".split("")); //arr = >a,p,p,l,y