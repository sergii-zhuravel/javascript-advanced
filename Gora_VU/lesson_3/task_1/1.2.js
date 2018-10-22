var character = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showPosition: function() { 
    console.log( this.step );
    return this;
  }
};

character.up().up().down().up().down().showPosition(); // 1
