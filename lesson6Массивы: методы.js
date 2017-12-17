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

alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"
