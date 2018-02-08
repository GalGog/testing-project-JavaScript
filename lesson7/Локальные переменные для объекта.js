function makeCounter() {
    var currentCount = 2;

    return { // возвратим объект вместо функции
        getNext: function() {
            return currentCount++;
        },

        set: function(value) {
            currentCount = value;
        },

        reset: function() {
            currentCount = 2;
        }
    };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5





function makeCounter() {
    var currentCount = 1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }

    // ...и добавляем ей методы!
    counter.set = function(value) {
        currentCount = value;
    };

    counter.reset = function() {
        currentCount = 1;
    };

    return counter;
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2

counter.set(5);
alert( counter() ); // 5