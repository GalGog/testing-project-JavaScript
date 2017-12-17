/**
 * Created by bakhtin on 16/12/2017.
 */
var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение ' + arr[i] );
}


/*Вызов split с пустой строкой разобьёт по буквам:*/ 
var str = "тест";

alert( str.split('') ); // т,е,с,т
