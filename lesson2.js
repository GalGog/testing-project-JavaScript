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