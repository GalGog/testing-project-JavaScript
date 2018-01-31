// текущая дата
var date = new Date();

// час в текущей временной зоне
alert( date.getHours() );

// сколько сейчас времени в Лондоне?
// час в зоне GMT+0
alert( date.getUTCHours() );


//
var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);

alert( d ); // 2 марта, 2011


//
var d = new Date();
d.setSeconds(d.getSeconds() + 70);

alert( d ); // выведет корректную дату



var start = new Date; // засекли время

// что-то сделать
for (var i = 0; i < 100000; i++) {
    var doSomething = i * i * i;
}

var end = new Date; // конец измерения

alert( "Цикл занял " + (end - start) + " ms" );




var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
}

alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );

// task 1
//Дата в местной временной зоне создается при помощи new Date.

//Месяцы начинаются с нуля, так что февраль имеет номер 1. Параметры можно указывать с точностью до минут:

    var d = new Date(2012, 1, 20, 3, 12);
alert( d );




//task2
//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.


//Метод getDay() позволяет получить номер дня недели, начиная с воскресенья.

    function getWeekDay(date) {
        var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

        return days[date.getDay()];
    }

var date = new Date(2014, 0, 3); // 3 января 2014
alert( getWeekDay(date) ); // 'пт'


//!!В современных браузерах можно использовать и toLocaleString:
//!!!!!!
    var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'




//task3
//День недели в европейской нумерации
//Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
//День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
//Решение – в использовании встроенной функции getDay. Она полностью подходит нашим целям, но для воскресенья возвращает 0 вместо 7:

function getLocalDay(date) {

    var day = date.getDay();

    if (day == 0) { // день 0 становится 7
        day = 7;
    }

    return day;
}

alert( getLocalDay(new Date(2018, 0, 3)) );


//Если удобнее, чтобы день недели начинался с нуля, то можно возвращать в функции day - 1, тогда дни будут от 0 (пн) до 6(вс).

