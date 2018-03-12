//Методы у объектов
var user = {
    name: 'Василий',

    // метод
    sayHi: function() {
        alert( 'Привет!' );
    }

};

// Вызов
user.sayHi();

var user = {
    name: 'Василий',

    sayHi: function() {
        alert( this.name );
    }
};

user.sayHi(); // sayHi в контексте user


var user = {
    name: 'Василий',

    sayHi: function() {
        showName(this); // передать текущий объект в showName
    }
};

function showName(namedObj) {
    alert( namedObj.name );
}

user.sayHi(); // Василий



var arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2](); // "a","b",function




"use strict"

var obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(method = obj.go)();      // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

//Что выведет alert в этом коде? Почему?

var user = {
    firstName: "Василий",

    export: this
};

alert( user.export.firstName );

//
var user = {
    firstName: "Василий",

    export: this // (*)
};

alert( user.export.firstName );

//
var name = "";

var user = {
    name: "Василий",

    export: function() {
        return this;
    }

};

alert( user.export().name );

//calculator
var calculator = {
    sum: function() {
        return this.a + this.b;
    },

    mul: function() {
        return this.a * this.b;
    },

    read: function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//чейнинг» (chaining)
var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
}

ladder.up().up().down().up().down().showStep();