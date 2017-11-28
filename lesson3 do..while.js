/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).*/
var num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);


nextPrime:
    for (var i = 2; i <= 10; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert( i ); // простое
    }




var num = 1;
for ( ; num <= 100; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
        document.write( num, " = FizzBuzz <br />" )
    } else {
        if ( num%5 === 0 ){
            document.write( num, " = Buzz <br />" );
        } else {
            if ( num%3 === 0 ){
                document.write( num, " = Fizz <br/ >" );
            } else {
                document.write( num, "<br/ >" );
            }
        }
    }
}



