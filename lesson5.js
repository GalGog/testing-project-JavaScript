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
