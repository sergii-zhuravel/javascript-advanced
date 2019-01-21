mazda = {
    wheels = 4,
    color: "red",
    engineOn: false,
    switchEngine: function (){
        if (this.engineOn){
document.writeln("Turning engine off");
this.engineOn = false;
    } else {
        document.writeln("Turning engine on"); 
        this.engineOn = true;
    }
    },
    drive: function() {
        this.switchEngine();
        document.writeln("I am driving. I'm a " + this.color + "car");
    }
};
mazda.drive()

ford = {
    wheels = 4,
    color: "blue",
    engineOn: false,
    switchEngine: function (){
        if (this.engineOn){
            document.writeln("Turning engine off");
this.engineOn = false;
    } else {
        document.writeln("Turning engine on"); 
        this.engineOn = true;
    }
    },
    drive: function() {
        this.switchEngine();
        document.writeln("I am driving. I'm a " + this.color + "car");
    }
};
ford.drive()