
var result = "\n";
for (var row = 1; row <= 8; row++) {
    for (var cell = 1; cell <= 8; cell++) {
        result += (row % 2 == cell % 2) ? "#" : " "; //Можно еще побитово - (row & 1 == cell & 1)
    }
    result += "\n";
}
alert (result);

// console.log(result);


/*Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n) {
    x = 2;
    n = 3;
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
    alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert( pow(x, n) );
}



