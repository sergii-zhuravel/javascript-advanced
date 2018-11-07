// 5.1

class Chat {
    constructor() {
        this.chatName = "Chat name";
    }
}

class ChatMember extends Chat {
    constructor(firstName, lastName, chatName) {
        super(chatName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

createChat = new Chat();
console.log(createChat);

getChatInfo = new ChatMember("Ivan", "Ivanov");

console.log(getChatInfo);

/************  5.2  */
class ObjectOne {
    constructor() {
        this.property1 = 'one';
    }
}

class ObjectTwo extends ObjectOne {
    constructor() {
        super();
        this.property2 = 'two';
    }
}

class ObjectThree extends ObjectTwo {
    constructor() {
        super();
        this.property3 = 'three';
    }
}

var ob1 = new ObjectOne;
var ob2 = new ObjectTwo;
var ob3 = new ObjectThree;
console.log(ob3);
