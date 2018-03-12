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