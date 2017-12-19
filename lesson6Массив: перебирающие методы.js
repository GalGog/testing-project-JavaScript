/**
 * Created by bakhtin on 16/12/2017.
 */
//Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
