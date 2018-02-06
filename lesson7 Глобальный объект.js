var a = 5; // объявление var создаёт свойство window.a
alert( window.a ); // 5

window.a = 5;
alert( a ); // 5

// На момент инициализации, до выполнения кода:
// window = { f: function, a: undefined, g: undefined }

var a = 5;
// window = { f: function, a: 5, g: undefined }

function f(arg) { /*...*/ }
// window = { f: function, a: 5, g: undefined } без изменений, f обработана ранее

var g = function(arg) { /*...*/ };
// window = { f: function, a: 5, g: function }

//Не важно, где и сколько раз объявлена переменная
var i = 10;

for (var i = 0; i < 20; i++) {
...
}

var i = 5;

//Также нет разницы между объявлением в цикле и вне его:

for (var i = 0; i < 5; i++) { }
var i;
for (i = 0; i < 5; i++) { }

//Конструкции for, if... не влияют на видимость переменных
var i;
{
    i = 5;
};

i = 5;
{
    var i;
};

//task1
//Каков будет результат кода?

if ("a" in window) {
    var a = 1;
}
alert( a );

if ("a" in window) {
    var a = 1;
}
alert( a );

//На стадии подготовки к выполнению, из var a создается window.a:

// window = {a:undefined}

if ("a" in window) { // в if видно что window.a уже есть
    var a = 1; // поэтому эта строка сработает
}
alert( a );


//task2

//Каков будет результат (перед a нет var)?

if ("a" in window) {
    a = 1;
}
alert( a );

//Переменной a нет, так что условие "a" in window не выполнится. В результате на последней строчке – обращение к неопределенной переменной.

if ("a" in window) {
    a = 5;
}
alert( a ); // <-- error!