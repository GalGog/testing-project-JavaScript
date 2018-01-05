/*Создайте пустой объект user.
Добавьте свойство name со значением Sergey. Добавьте свойство surname со значением Petrov. Поменяйте значение name на Andrey.
Добавьте свойство age со значением 30. Удалите свойство name из объекта.
Выведите объект в консоль.*/
var user = {};
user.name = 'sergey';
user.surname = 'Petrov';
user.name = 'Andrey';
user.age = 30;
delete user.name;
console.log (user);


var tasksCompleted = {
    Serg: 45,
    Anna: 23,
    Elena: 1,
    Anton: 19
};
for (var key in tasksCompleted) {
    alert( "Ключ: " + key + " значение: " + tasksCompleted[key] );
}

//////////////////////
var codes = {
    "+7": "Россия",
    "+38": "Украина",
    "+1": "США"
};

for (var code in codes) {
    var value = codes[code];
    code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7

    alert( code + ": " + value ); // 7, 38, 1 во всех браузерах
}

//////////////////

var time = {
    year: 1345,
    month: 12,
    day: 10,
    hour: 11,
    minute: 12,
    second: 13,
    microsecond: 123456
}

console.log(time); // (*)
time.microsecond++; // (**)
