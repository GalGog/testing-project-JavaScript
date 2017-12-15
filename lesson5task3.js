/**
 * Created by bakhtin on 15/12/2017.
 */
/*•	Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 •	Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 •	При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива когда ввод прекращен*/
var numbers = [];

while (true) {

    var value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( sum );