"use strict";

const userNames = [
    'Петро',
    'Емма',
    'Яна',
    'Петро',
    'Яна',
    'Марта',
    'Яна',
    'Василь',
    'Марта',
    'Яна',
    'Антон',
    'Олена',
    'Яна',
    'Марта',
    'Емма'
];

function filterUnique(arrayOfNames) {
    //створюємо Set, передаємо в нього масив, використовуємо оператор розширення і повертаємо масив
    return [...(new Set(arrayOfNames))];
}

//Приклади роботи
console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
console.log(filterUnique(["Ганна"]));
console.log(filterUnique([]));
console.log(filterUnique(null));
console.log(filterUnique(undefined));