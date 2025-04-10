// function wtf(s) {
//     for (var i = s.length - 1, o = ''; i >= 0;  o += s[i--] ) {

//   }

//   return o
// }

// console.log(wtf("ABC")) //

// const arr = [1,1,2,2,2,5,5,5,2,7];

// const fooo = (arr) => {

// const freqMap = arr.reduce((acc, num) => {
//       acc[num] = (acc[num] || 0 ) + 1;
//     return acc;
//   }, {});

// return Object.entries(freqMap).sort((a, b)=>b[1] - a[1]).map((elem)=>+elem[0])

// }

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log).then(() => console.log(7));

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log).then(() => console.log(8));

// console.log(6);
// ===================================================
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
