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
