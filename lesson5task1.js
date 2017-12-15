/**
 * Created by bakhtin on 15/12/2017.
 */
/*Напиште код который выведет сотрудника который выполнил больше всех задач.*/

"use strict";

var salaries = {
    "Вася": 100,
    "Vova": 300,
    "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}

alert( maxName || "нет сотрудников" );