/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

Результатом функции должна быть (при необходимости) усечённая строка.*/
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
        // итоговая длина равна maxlength
    }

    return str;
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 40) );
alert( truncate("Всем привет!", 20) );



function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 3) + '...' : str;
}