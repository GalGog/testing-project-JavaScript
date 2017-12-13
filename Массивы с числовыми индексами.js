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