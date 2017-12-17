/**
 * Created by bakhtin on 16/12/2017.
 */
var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение ' + arr[i] );
}


/*Вызов split с пустой строкой разобьёт по буквам:*/ 
var str = "тест";

alert( str.split('') ); // т,е,с,т

/*arr.join(str)  Он берет массив и склеивает его в строку, используя str как разделитель.*/
var arr = ['Маша', 'Петя', 'Марина', 'Василий'];

var str = arr.join(';');

alert( str ); // Маша;Петя;Марина;Василий




/*arr.splice(index[, deleteCount, elem1, ..., elemN])*/
var arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

alert( arr ); //  осталось ["Я", "JavaScript"]





/*arr.splice(index[, deleteCount, elem1, ..., elemN])*/
var arr = ["Я", "сейчас", "изучаю", "JavaScript"];

// удалить 3 первых элемента и добавить другие вместо них
arr.splice(0, 3, "Мы", "изучаем")

alert( arr ) // теперь ["Мы", "изучаем", "JavaScript"]




/*arr.splice(index[, deleteCount, elem1, ..., elemN])*/
var arr = ["Я", "сейчас", "изучаю", "JavaScript"];

// удалить 2 первых элемента
var removed = arr.splice(0, 2);

alert( removed ); // "Я", "сейчас" <-- array of removed elements



//Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:

var arr = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");



//Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется.
var arr = ["Почему", "надо", "учить", "JavaScript"];

var arr2 = arr.slice(1, 3); // элементы 1, 2 (не включая 3)

alert( arr2 ); // надо, учить

alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"



//arr.reverse() меняет порядок элементов в массиве на обратный.

var arr = [1, 2, 3];
arr.reverse();

alert( arr ); // 3,2,1



//Метод arr.concat(value1, value2, … valueN) создаёт новый массив, в который копируются элементы из arr, а также value1, value2, ... valueN.
var arr = [1, 2];
var newArr = arr.concat(3, 4);

alert( newArr ); // 1,2,3,4



//Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement в массиве arr или -1, если его нет.
var arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
