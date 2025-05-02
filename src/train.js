//? Напиши функцию Debounce
// Это функция, которая откладывает выполнение функции, пока не пройдет определенный delay с момента последнего вызова
// Ресайз окна, вводы в полях, скролл событий, автосохранение

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // сброс предыдущего таймера
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // вызвать с сохранением контекста и аргументов
    }, delay);
  };
}

//  В Реакте ========================================================
// import React, { useState, useEffect, useMemo } from "react";

// function useDebouncedValue(value, delay) {
//   const [debounced, setDebounced] = useState(value);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebounced(value);
//     }, delay);

//     return () => clearTimeout(timeout);
//   }, [value, delay]);

//   return debounced;
// }

// function SearchInput() {
//   const [search, setSearch] = useState("");

//   // debounce на 500 мс
//   const debouncedSearch = useDebouncedValue(search, 500);

//   // реагируем только когда debounce "сработал"
//   useEffect(() => {
//     if (debouncedSearch.trim()) {
//       console.log("🔍 Выполняем запрос по:", debouncedSearch);
//   // fetchData(debouncedSearch) и т.п.
//     }
//   }, [debouncedSearch]);

//   return (
//     <input
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       placeholder="Поиск..."
//     />
//   );
// }

//? Обьясни что делает функция, перепиши в декларативный стиль

//  function wtf(s) {
//     for (var i = s.length - 1, o = ''; i >= 0;  o += s[i--] ) {

//   }

//   return o

// }

// console.log(wtf("ABC")) //

//? Напиши функцию для разворачивания вложенных массивов любой глубины, в один массив

//   let result = flattenArray([1, [2, [3, [4, 5], [6, 7, 8, [9, 10]]]]]);

//* Варианты с рекурсией

//  const flattenArray = arr => arr.reduce((accumulator, value) =>
//     accumulator.concat(Array.isArray(value) ? flattenArray(value) : value),
//     []);

// const flattenArray = (arr) => {
//     let result = [];

//     for(const value of arr) {
//       if(Array.isArray(value)) {
//         result.push(...flattenArray(value))
//       }
//       else {
//         result.push(value)
//       }
//     }
//     return result
//   }

//* Итеративный вариант

//  const flattenArray = (arr) => {
//     const stack = [...arr];
//     const result = [];

//     while(stack.length) {
//         const value = stack.pop();
//         if(Array.isArray(value)) {
//             stack.push(...value)
//         }
//         else {
//             result.push(value)
//         }
//     }
//     return result.reverse()
//  }

//   console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//? Напиши функцию, которая вернет числа по частоте их повторения, например, по данному в примере массиву получится [2, 5, 1, 7]

// const arr = [1,1,2,2,2,5,5,5,2,7];

// const fooo = (arr) => {

// const freqMap = arr.reduce((acc, num) => {
//       acc[num] = (acc[num] || 0 ) + 1;
//     return acc;
//   }, {});

// return Object.entries(freqMap).sort((a, b)=>b[1] - a[1]).map((elem)=>+elem[0])

// }

//? Правильный порядок логов согласно Event loop

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log).then(() => console.log(7));

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log).then(() => console.log(8));

// console.log(6);
//! ===================================================
// Написать функцию, либо последовательность операций, которая вернет результат следующих условий:
// - результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке символов,
// - результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// - результат не содержит одинаковых символов
// const input = [
//   { value: "abcd", order: 4, expired: false },
//   { value: "qwer", order: 2, expired: true },
//   { value: "xyz1", order: 1, expired: false },
//   { value: "abx2", order: 3, expired: false },
// ];

// Promise.reject('a')
//   .catch(p => {
//     throw p + 'b'; // Генерируем новую ошибку
//   })
//   .catch(p => p + 'c') // Обрабатываем новую ошибку
//   .then(p => p + 'd')  // Результат: 'abc'
//   .then(p => console.log(p)); // Вывод: 'abcd'
////? Способы поменять переменную местами
// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// a = a + b;
// b = a - b
// a = a - b

// a = a ^ b
// b = a ^ b
// a = a ^ b

// let tmp = a;
// a = b;
// b = tmp

//? ===================================================
