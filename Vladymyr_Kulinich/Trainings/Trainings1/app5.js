//функция-конструктор - пишем название с большой буквы, любая функция в JS есть конструктором
var Track = function(params) {
    console.log(params);
    this.name = params.name;
    this.url = params.url;
    //   this.playTrack = function(){
    //       console.log("Вы начали проигрывание файла ", this.name)
    //   };
  };
  Track.prototype.playTrack = function() {
    console.log("Вы начали проигрывание файла ", this.name);
  };
  
  var YoutubeTrack = function(params) {
     Track.apply(this, arguments)               //вызываем метод apply врнутри конструктора для наследования
     this.image = params.image;                 //присваиваем дополнительный параметр
    };
  
  //в результате вызова конструктора мы получаем экземпляр класса
  //создаем два экземпляра класса трек которые будут передавать в конструктор параметры
  //при создании new Track мы передаем внутрь конструктора объект с полями name, url
  YoutubeTrack.prototype = Object.create(Track.prototype);
  //делаем все функции в классе трек доступными в классе ютубтрек(делаем наследование для дочернего класса); мы присваем обджект прототайп объект который мы сделали из трек прототайп
  YoutubeTrack.prototype.constructor  = YoutubeTrack;
  //присваем конструктору ютуб прототайп его изначальное значение
  YoutubeTrack.prototype.playTrack = function(){
      console.log("Hello youtube " + this.name);
  } 
  //мы можем переопределить метод для экземпляровв класса
  var track01 = new Track({
    name: "track01",
    url: "track01.mp3"
  });
  var track02 = new Track({
    name: "track02",
    url: "track02.mp3"
  });
  console.log(track01);
  console.log(track02);
  track01.playTrack(); //вызов метода плей трек для объетка трек 01
  track02.playTrack(); //вызов метода плей трек для объетка трек 02
  
  var YoutubeTrack01 = new YoutubeTrack({
      name: "YoutubeTrack01",
      url: "YoutubeTrack01.mp3",
      image: "YoutubeTrack01.gpg"
    });
    var YoutubeTrack02 = new YoutubeTrack({
      name: "YoutubeTrack02",
      url: "YoutubeTrack02.mp3",
      image: "YoutubeTrack02.gpg"
    });
  
  console.log(YoutubeTrack01);
  console.log(YoutubeTrack02);
  YoutubeTrack01.playTrack(); //вызов метода плей трек для объетка трек 01
  YoutubeTrack02.playTrack(); //вызов метода плей трек для объетка трек 02
  
  //метод класса можно объявлять не только через вызов функции, но и через свойство prototype
  