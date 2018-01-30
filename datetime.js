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