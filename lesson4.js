/*Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false

Метод indexOf ищет совпадение с учетом регистра. То есть, в строке 'xXx' он не найдет 'XXX'.

Для проверки, сначала приведем строку str к нижнему регистру, а затем уже будем искать.
*/
function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );