
  function Menu(elem) {
    this.save = function() {
      console.log( 'сохраняю' );
    };
    this.load = function() {
      console.log( 'загружаю' );
    };
    this.search = function() {
      console.log( 'ищу' );
    };

    var self = this;

    elem.onclick = function(e) {
      // get action from target and run it
      if (e,target.tagName == "BUTTON"){
      self[e.target.getAttribute('data-action')]()
      }
    };
  }

  new Menu(menu);
