/**
 * Created by bakhtin on 13/12/2017.
 */
var arr = ["bus", "car", "cycle", "cycle"];
arr[1] = "pedestrian";
alert( arr.length);
alert(arr[1]);
alert( arr);

var mas = [1, "name", {name: "Vova"},true];
alert(mas[2].name);
// получить объект из массива и тут же -- его свойство


//push  Добавляет элемент в конец массива:

var fruit = ["mango", "avokado", "gosga"]
fruit.push ("bear");
alert(fruit);

var fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");

alert( fruits );


//shift Удаляет из массива первый элемент и возвращает его:


var yamy = ["mango", "avokado", "gosga"]
alert (yamy.shift());
alert(yamy);

/*Создайте массив styles с элементами «Джаз», «Блюз».
 Добавьте в конец значение «Рок-н-Ролл»
 Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
 Удалите первое значение массива и выведите его alert.
 Добавьте в начало значения «Рэп» и «Регги».*/


 var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
styles.shift(1);
styles.unshift("Рэп", "Регги");
alert(styles);