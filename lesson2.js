var year = prompt('Какой сейчас год?', '');
if (year == 2017) {
    alert('Вы правы!');
}
else{
    alert( 'С луны свалися? 2017!' );
}


/* task2 ???*/
var number = prompt('Введите любое целое число?', '');

if (number == 1){
    alert('1');
}
else if (number >0){
    alert(' значение больше нуля ');
}
else if (number < 0 ){
    alert('если значение меньше нуля, ');
}

/* task3 */
var userName = prompt('ваш логин ?', '');

if (userName == 'admin') {

    var pass = prompt('Пароль?', '');

    if (pass == 'passw0rd') {
        alert( 'Welcome home!' );
    } else if (pass == null) { // (*)
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName == null) { // (**)
    alert( 'Canceled' );

} else {

    alert( 'Я вас не знаю' );

}
/* task4 */
var a = 1, b = 2;
if (a + b >= 3) {
    result = 'Yep!';
} else {
    result = 'Noup!';
}
/* task4  Перепишите if с использованием оператора '?':

var a = 1, b = 2;
(a + b >= 3)? alert('Yep!'):alert('noun');

*/
/* task5 */
var name = 'admin', text;

if (name == 'admin') {
    text = 'Hi';
} else if (name == 'manager') {
    text = 'Hello';
} else if (name == '') {
    text = 'No login';
} else {
    text = '';
}
/* task5 Перепишите if..else с использованием нескольких операторов '?':

var name = (name == 'admin')?'Hi':
(name == 'manager')?'Hello':
    (name == '')? 'No login':
        '';
*/