// ссилочный тип данных

// let a = 6;
// let b = 5;

// a = b

// a = 7;
// console.log(a, b);

// const obj1 = {
//    a: 5,
//    b: 6
// }
// const obj2 = obj1

// obj1.a = 7

// console.log(obj1, obj2);


// методы копирования обьекта

// Object.assign

// const obj1 = {
//    a: 5,
//    b: 6
// }

// const obj2 = {}

// Object.assign(obj2, obj1) // Object.assign клонирует обьект по первому уровню

// obj1.a = 7;

// console.log(obj1, obj2);

// как копировать вложеный обьект
// let user = {
//    name: "John",
//    sizes: {
//       height: 182,
//       width: 50
//    }
// };

// let clone = structuredClone(user); // клонирует всю структуру обьекта на много уровней  (новый метод)

// clone.name = 'Anton';
// clone.sizes.height = 185;

// console.log(user, clone);

// JSON stringify приводит к строке обьект или масив (JSON форат данных)

// const obj = {
//    "name": "John", // обязательно двойные кавычки
//    "sizes": {
//       "height": "182",
//       "width": "50"
//    }
// };

// const jsonObjStr = JSON.stringify(user);// конвертирует обьект или масив в строку
// console.log(JSON.parse(jsonObjStr)); // конвертирует строку в обьект или масив

// клонирование обьектов с помощью JSON

// let a = {
//    name: 'Sasha'
// }

// let b = JSON.parse(JSON.stringify(a))
// b.name = 'Leonid'
// console.log(a, b);


// копирование обьекта с помощью операторa ...spread

// let a = {
//    name: 'Sasha',
//    age: 23,
//    height: 175,
//    user: {
//       name: 'Oleg',
//       age: 30
//    }
// }

// let clone = { ...a, user: { ...a.user } } // многоуровневое обращение
// clone.age = 25;
// clone.user.age = 35
// console.log(a, clone);

// копирование обьекта с помощью операторa ...spread по уровням


// мутабельность - изхначально структуру данных мутируем и // имутабельность не мутируем

// let arr = [1, 2, 3]
// let arr2 = arr.splice(0, 1) // splice мутирует изначальные данные (мутабельность)
// console.log(arr, arr2);

let arr = [1, 2, 3]
let arr2 = arr.slice(0, 1) // slice не мутирует изначальные данные (имутабельность)
console.log(arr, arr2);


