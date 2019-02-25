var client = {
    name: "Vasy",
    ip: "0.0.1.1"
}

function showClient(){
    console.log(this.name + " : " + this.ip);
}

showClient.call(client);

var mas = [1, -3, 4, 5, 0];

console.log(Math.max.apply(null, mas));
console.log(Math.min.apply(null, mas));


var soup = {
    size: 'big',
    makeSoup: function (){
        return ("Cooking " + this.size + " soup");
    }
}

var restaurant = {
    makeDish: function(){
        console.log(soup.makeSoup.bind(soup)())
    }
}

restaurant.makeDish();