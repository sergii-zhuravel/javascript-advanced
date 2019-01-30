//bind method
var cars = {
    data:[
        { name: "Mitzubisi Lancer" },
        { name: "Chevrolet Impala" }
    ]
}

cars.showFirst = users.showFirst.bind(cars);
cars.showFirst();
// apply method
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"Vladymyr",
    lastName: "Kulinich",
  }
  var x = person.fullName.apply(person1); 
  //call method
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"Vladymyr",
    lastName: "Kulinich",
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Kulinich",
  }
  person.fullName.call(person1);