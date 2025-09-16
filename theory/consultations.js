// ! TASK
// const user = {
//   name: 'Ivan',
//   getName() {
//       return this.name;
//   }
// }
// const getUserName = user.getName
// console.log('user name is' + getUserName());

// ! TASK
// let user = {
//   age: 12,
//   getAge() {
//       return this.age
//   }
// }
// user.notGetAge = user.getAge

// console.log((user.notGetAge = user.getAge)());
// console.log(user.notGetAge = user.getAge);
// console.log(user.notGetAge());
// console.log((user.notGetAge = user.getAge()));

// * ANSWER
// undefined
// [Function: getAge]
// 12
// 12

// ! TASK
// console.clear();

// console.log("sum 1: ", sum(1).total);
// console.log("sum 5: ", sum(2, 3).total);
// console.log("sum 7: ", sum(1)(3)(5)(-2).total);
// console.log("sum 14: ", sum(1, 1)(2, 3, 4)(5)(-2).total);

// const semisum = sum(1);
// console.log("sum 3: ", semisum(2).total);
// console.log("sum 4: ", semisum(3).total);
// * ANSWER
// const sum = (...args) => {
//   const total = args.reduce((acc, cur) => acc + cur, 0);

//   const fn = (...deepArgs) => sum(...deepArgs, total);

//   fn.total = total;

//   return fn;
// };

// ! TASK
// Перечислите очередность исполнения скриптов. Почему именно в таком?
/*
<script async src="js_scr_1.js"></script> // Время загрузки 1.5 сек.
<script src=" js_scr_2.js"></script> // Время загрузки 1 сек.
<script defer src=" js_scr_3.js"></script> // Время загрузки 3 сек.
<script defer src=" js_scr_4.js"></script> // Время загрузки 1.5 сек.
<script src=" js_scr_5.js"></script> // Время загрузки 2 сек.
<script async src=" js_scr_6.js"></script> // Время загрузки 1 сек.
<script defer src=" js_scr_7js"></script> // Время загрузки 0.1 сек.
*/

// ! TASK
// setTimeout(() => {
//   console.log("timeout-1");
// }, 0);

// console.log('1')

// new Promise ((resolve) => {
//   setTimeout(() => {
//     console.log('2')
//     console.log("timeout-2");
// }, 0);
//   console.log(3)
//   resolve()
// })
// .then(console.log('then1'))
// .then(console.log('then2'))

// setTimeout(() => {
//   console.log("timeout-3");
//   console.log(4);
// }, 0);

// console.log('5')
// * ANSWER
// 1
// 3
// then1
// then2
// 5
// timeout-1
// 2
// timeout-2
// timeout-3
// 4

// ! TASK
// Написать функцию, либо последовательность операций, которая вернет результат следующих условий:
// - результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке символов,
// - результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// - результат не содержит одинаковых символов
// * ANSWER
// const input = [
//   { value: "abcd", order: 4, expired: false },
//   { value: "qwer", order: 2, expired: true },
//   { value: "xyz1", order: 1, expired: false },
//   { value: "abx2", order: 3, expired: false },
// ];

// function getReversedUniqResult(input) {
//   // Вариант №1
// const result = [];

// input.sort((a, b) => a.order - b.order);

// for (let i = 0; i < input.length; i++) {
//   if (!input[i].expired) {
//     result.push(input[i].value.split("").reverse());
//   }
// }

// const settedArray = new Set(result.flat());

// return Array.from(settedArray).join("");

//   // Вариант №2
//   const result = input
//     .filter((el) => !el.expired)
//     .sort((a, b) => a.order - b.order)
//     .map((el) => el.value.split("").reverse())
//     .flat();

//   return [...new Set(result)].join("");;
// }

// console.log(getReversedUniqResult(input));

// ! TASK
// const martrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // 7 4 1
// // 8 5 2
// // 9 6 3

// const revertMatrix = (array) => {
//   // Вариант №1
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const row = [];

//     for (let j = array[i].length - 1; j >= 0; j--) {
//       row.push(array[j][i]);
//     }

//     result.push(row);
//   }

//   return result;

//   // Вариант №2
//   // result = array[0].map((_, i) => array.map((el) => el[i])).map((arr) => arr.reverse());
//   // return result
// };

// console.log(revertMatrix(martrix));

// ! TASK
// console.log(1); // sync

// setTimeout(() => { // macro
//   console.log(2);
// });

// Promise.resolve().then(() => console.log("micro")); // micro

// const p = new Promise((res) => {
//   console.log(3);

//   setTimeout(() => { // macro
//     console.log(4);
//     res();
//   });
// });

// setTimeout(() => { // macro
//   console.log(5);
// });

// p.then(() => { // macro
//   console.log(6);
// }).then(() => {
//   console.log(7);
// });

// console.log(8); //  sync

// // 1 3 8 micro 2 4 6 7 5

// ! TASK
// Promise.reject("a")
//   .catch((s) => s + "b")
//   .catch((s) => s + "c")
//   .then((s) => s + "d")
//   .finally((s) => s + "e")
//   .then((s) => console.log(s));

// abd

// ! TASK

// const cars = [
//   'Mersedes',
//   'BMW',
//   'Citroen',
//   'Lada',
//   'Volga',
//   'Renaul',
//   'Porche',
// ];

// * ANSWER
// import { useState } from 'react';
// import './App.css';

// const initialCars: string[] = [
//   'Mersedes',
//   'BMW',
//   'Citroen',
//   'Lada',
//   'Volga',
//   'Renaul',
//   'Porche',
// ];

// function App() {
//   const [garage, setGarage] = useState<string[]>([]);
//   const [shop, setShop] = useState<string[]>(initialCars);

//   const handleBuy = (i: number) => {
//     setGarage([...garage, shop[i]]);
//     setShop(shop.filter((el) => el !== shop[i]));
//   };

//   const handleClear = () => {
//     setShop(initialCars);
//     setGarage([]);
//   };

//   return (
//     <>
//       <div className="app-container">
//         <div>Магазин</div>
//         <br />
//         {shop.map((el, i) => {
//           return <div onClick={() => handleBuy(i)}>{el}</div>;
//         })}
//         <br />
//         <div>Гараж</div>
//         <br />
//         {garage.length > 0 &&
//           garage.map((el) => {
//             return <div>{el}</div>;
//           })}
//       </div>
//       <button onClick={() => handleClear()}>Вернуть машины в гараж</button>
//     </>
//   );
// }

// export default App;

// ! TASK
/* Напишите функцию findPairs, которая принимает массив целых чисел и целевую сумму. Функция должна вернуть все уникальные пары чисел из массива,
 которые в сумме равны заданной целевой сумме.
numbers = [2, 7, 3, 5, 10, 8]
targetSum = 10
[3,7] [2,8]
Надо решить задачу, избегая повторов одного и того же числа в паре, чтобы пары [3,7] и [7,3] считались одной и той же парой. */

// * ANSWER
// function findPairs(array, target) {
//   let left = 0;
//   let right = array.length - 1;

//   const pairsMap = new Map();

//   array.sort((a, b) => a - b);

//   while (left < right) {
//     const sum = array[left] + array[right];

//     if (sum === target) {
//       const key = `${array[left]},${array[right]}`;

//       if (!pairsMap.has(key)) {
//         pairsMap.set(key, [array[left], array[right]]);
//       }

//       left++;
//       right--;
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return Array.from(pairsMap.values());
// }

// console.log(findPairs([2, 7, 3, 5, 10, 8], 10)); // [3,7] [2,8]

// ! TASK
// Реализовать функцию shuffle , которая принимает на вход массив чисел
// и всегда возвращает массив этих же чисел, но каждый раз в случайном порядке.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// * ANSWER
// function shuffle(array) {
//   const shuffledArr = array.slice();

//   for (let i = shuffledArr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i * 1));

//     // Вариант №1
//     // const temp = shuffledArr[i];
//     // shuffledArr[i] = shuffledArr[j];
//     // shuffledArr[j] = temp;

//     // Вариант №2
//     [shuffledArr[j], shuffledArr[i]] = [shuffledArr[i], shuffledArr[j]];
//   }

//   return shuffledArr;
// }

// console.log(shuffle(arr));

// function flatten(obj, parent = []) {
//   if (Array.isArray(obj)) {
//       return obj.reduce((acc, item) => {
//           return acc.concat(flatten(item, parent));
//       }, []);
//   } else if (typeof obj === 'object' && obj !== null) {
//       return Object.keys(obj).reduce((acc, key) => {
//           return acc.concat(flatten(obj[key], parent.concat(key)))
//       }, []);
//   } else {
//       return [parent.concat(obj).join('/')];
//   }
// }

// ! TASK
// Реализовать функцию sum:
// sum(2)(3)(4)(); // 9
// sum(1)(2)(3)(4)(); // 10
// sum(); // 0
// sum(2)(3, 4, 5)(); // 14
// sum(1, 2)(3, 4, 5)(); // 15

// * ANSWER
// function sum(...args) {
//   if (!args.length) {
//     return 0;
//   } else {
//     const count = args.reduce((acc, cur) => acc + cur, 0);
//     return function (...nextRest) {
//       if (!nextRest.length) {
//         return count;
//       } else {
//         return sum(count, ...nextRest);
//       }
//     };
//   }
// }

// console.log(sum(2)(3)(4)()); // 9
// console.log(sum(1)(2)(3)(4)()); // 10
// console.log(sum()); // 0
// console.log(sum(2)(3, 4, 5)()); // 14
// console.log(sum(1, 2)(3, 4, 5)()); // 15

// ! TASK
// Есть дерево обьектов формата
// {
//    left: {},
//    right: {},
//    value: <number>
// }
// Поля left и right опционально содержат в себе обьект с такой же
// структурой. Value присутствует всегда.
//
// Необходимо посчитать сумму всех value.

// const tree = {
//   left: {
//     left: {
//       left: {
//         right: {
//           left: {
//             value: 7,
//           },
//           right: {
//             value: 14,
//           },
//           value: 66,
//         },
//         value: 23,
//       },
//       value: 90,
//     },
//     right: {
//       value: 67,
//     },
//     value: 34,
//   },
//   right: {
//     value: 11,
//   },
//   value: 16,
// };

// * ANSWER
// Вариант №1
// function treeValueSumm(obj) {
//   if (!obj) {
//     return 0;
//   }

//   let sum = obj.value || 0;

//   if (obj.left) {
//     sum += treeValueSumm(obj.left);
//   }

//   if (obj.right) {
//     sum += treeValueSumm(obj.right);
//   }

//   return sum;
// }

// console.log(treeValueSumm(tree));

// Вариант №2
// function treeObject(obj) {
//   if (!obj) return 0;

//   let counter = obj.value || 0;

//   for (const key in obj) {
//     if (typeof obj[key] === "object") {
//       counter += treeObject(obj[key]);
//     } else {
//       counter + obj.value;
//     }
//   }

//   return counter;
// }

// console.log(treeObject(tree));

// ! TASK
// function fun1(arr) {
//   arr[0] = 2;
// }
// function fun2(arr) {
//   arr = [0];
// }
// let arr = [];

// fun1(arr);
// console.log(arr);

// fun2(arr);
// console.log(arr);
// * ANSWER
// [2]
// [2]

// ! TASK
// const obj = {  global: { document: 'Hello!' },
//   getGlobal: () =>  this.global.document
//   // getGlobal: function () {
//   //   return this.global.document
//   // }
// }

// console.log(obj.getGlobal())
// * ANSWER
// undefined => error
// hello

// ! TASK
// let boo = true;

// while (boo) {
//   setTimeout(() => boo = false, 3000)
//   console.log(boo);
// }
// * ANSWER
// Зациклиться, т.к. setTimeout уйдет в очередь макрозадач, который не выполниться, потому что нет условия выхода из цикла

// ! TASK
// const protos = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("start");
//   console.log(2);
//   reject("end");
//   setTimeout(() => {
//     console.log(3);
//   }, 0);
// });
// protos.then((value) => {
//   console.log(value);
// });
// const promisCheck = Promise.resolve().then(() => {
//   console.log("promiseCheck");
//   setTimeout(() => {
//     const promisFront = Promise.resolve().then(() => {
//       console.log("promiseFront");
//     });
//     console.log("foo");
//   }, 0);
// });
// console.log("EPAM");
// * ANSWER
// 1 2 EPAM start promiseCheck 3 foo promiseFront

// ! TASK
// const square = {
//   side: 5,
//   area() {
//     return this.side * this.side;
//   },
//   perimeter: () => 4 * this.side,
// };
// console.log(square.area());
// console.log(square.perimeter());
// * ANSWER
// 25
// NaN

// ! TASK
// Написать функцию, которая находит сумму
// const arr = [1, 2, [3, 4], [[5], [6]], 7, [9, 10]];

// * ANSWER
// function getSum(arr) {
//   // Вариант №1:
//   let sum = 0;

//   arr.forEach((el) => {
//     if (Array.isArray(el)) {
//       sum += getSum(el);
//     } else {
//       sum += el;
//     }
//   });

//   return sum;

//   // Вариант №2:
//   // const flattedArr = arr.flat(Infinity);

//   // return flattedArr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(getSum(arr));


// ! TASK
// Привести заданную структуру к виду:
// ["a.js", "b.js", "src/some.js", "src/other.js", "src/components/someComponent.js"];

// const structure = [
//   "a.js",
//   "b.js",
//   {
//     src: [
//       "some.js",
//       "other.js",
//       {
//         components: ["someComponent.js"],
//       },
//     ],
//   },
// ];

// * ANSWER
// Вариант №1
// function flatten(obj, parent = []) {
//   if (Array.isArray(obj)) {
//       return obj.reduce((acc, item) => acc.concat(flatten(item, parent)), []);
//   } else if (typeof obj === 'object' && obj !== null) {
//       return Object.keys(obj).reduce((acc, key) => acc.concat(flatten(obj[key], parent.concat(key))), []);
//   } else {
//       return [parent.concat(obj).join('/')];
//   }
// }

// Вариант №2
// function flatten(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       result.push(arr[i]);
//     } else if (typeof arr[i] === "object") {
//       for (let key in arr[i]) {
//         const path = flatten(arr[i][key]);

//         path.forEach((el) => {
//           result.push(`${key}/${el}`);
//         });
//       }
//     }
//   }

//   return result;
// }

// console.log(flatten(structure));

// ! TASK

//Задача: из объекта users сделать массив users, где каждый объект имеет следующую структуру
// {
//   name: 'Fedor', // ключ объекта с заглавной буквы
//   age: 20, // возраст без изменений
//   gender: 'male', // oleg, fedor — 'male', natasha — 'female', остальные имена 'unknown',
//   info: {
//     lastUpdate: 'Mon, 01 Nov 2021 00:10:21 GMT' // дата в формате new Date().toUTCString()
//     // все остальные поля без изменений
//   }
// }

// const users = {
//   oleg: {
//     age: 20,
//     info: {
//       created: "Thu Nov 01 2021 05:10:21 GMT+0500",
//       lastUpdate: "Thu Nov 01 2022 05:10:21 GMT+0500",
//       rating: 5,
//     },
//   },
//   fedor: {
//     age: 22,
//     info: {
//       created: "Thu Nov 01 2021 05:10:21 GMT+0500",
//       lastUpdate: "Thu Nov 01 2022 05:10:21 GMT+0500",
//       rating: 4,
//     },
//   },
//   natasha: {
//     age: 35,
//     info: {
//       created: "Thu Nov 01 2021 05:10:21 GMT+0500",
//       lastUpdate: "Thu Nov 01 2022 05:10:21 GMT+0500",
//       rating: 4,
//     },
//   },
//   sasha: {
//     age: 26,
//     info: {
//       created: "Thu Nov 01 2021 05:10:21 GMT+0500",
//       lastUpdate: "Thu Nov 01 2022 05:10:21 GMT+0500",
//       rating: 7,
//     },
//   },
// };

// const MALE_NAMES = ["oleg", "fedor"];
// const FEMALE_NAMES = ["natasha"];

// * ANSWER
// function transforUsers(users) {
//   return Object.entries(users).map(([name, { age, info }]) => {
//     const gender = MALE_NAMES.includes(name) ? "male" : FEMALE_NAMES.includes(name) ? "female" : "unknown";

//     return {
//       name: name[0].toUpperCase() + name.slice(1),
//       age,
//       gender,
//       info: {
//         ...info,
//         lastUpdate: new Date(info.lastUpdate).toUTCString(),
//       },
//     };
//   });
// }

// console.log(transforUsers(users));

// ! TASK
// let x = 1;

// const foo = () => {
//   console.log(x);
// };

// const bar = () => {
//   console.log(x); // undefined
//   var x = 2;
//   foo(); // 1
// };

// bar();

// * ANSWER
// undefined 1

// ! TASK
// const a = { b: 1 };
// const c = Object.create(a);
// console.log(c.b); // 1
// delete c.b;
// console.log(c.b); // 1

// * ANSWER
// 1 1

// ! TASK
// let user = {
//   firstName: "Вася",
//   sayHi: function () {
//     console.log(`Привет, ${this.firstName}!`);
//   },
// };

// setTimeout(user.sayHi, 1000);

// * ANSWER
// 'Привет, undefined'
// Чтобы вернуть контекст:
// setTimeout(user.sayHi.bind(user), 1000);

// ! TASK
// Promise.resolve(1)
//   .then(() => {
//     console.log(2);
//   })
//   .then(console.log)
//   .then(() => {
//     console.log(3);
//   });
// console.log(4);

// * ANSWER
// 4 2 undefined 3
