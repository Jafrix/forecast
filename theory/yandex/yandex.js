/**
 * Реализовать функцию-обертку runOnce, которая принимает
 * функцию и возвращает новую функцию. Новая функция
 * может быть вызвана только один раз, все последующие
 * вызовы возвращают undefined.
 *
 * Оборачиваемая функция может принимать аргументы
 * и возвращать результат.
 */

function runOnce(fn) {
  // your code
}

const logHello = () => {
  console.log("hello!");
};

const logHelloOnce = runOnce(logHello);
console.clear();
logHelloOnce(); // 'hello!'
logHelloOnce(); // //undefined
// ======================================================================================
/**
 * Необходимо написать асинхронную функцию,
 * которая будет "спать" заданное количество миллисекунд,
 * а потом успешно завершаться
 */

function sleep(duration) {}

// Пример
const startTime = Date.now();
console.log("Start sleeping...");
sleep(2000).then(() => {
  console.log("Woke up after 2 seconds!");
  console.log("Time passed: ", Date.now() - startTime);
});

sleep(1000).then(() => {
  console.log("Woke up after 1 seconds!");
  console.log("Time passed: ", Date.now() - startTime);
});
// ======================================================================================
/*  
Нужно написать полифилл для Array.prototype.some  

Параметры  
 - callback - Функция проверки каждого элемента, принимает три аргумента:  
   - element - Текущий обрабатываемый элемент массива.  
   - index (Необязательный) - Индекс текущего обрабатываемого элемента массива.  
   - array (Необязательный) - Массив, по которому осуществляется проход.  
   - thisArg (Необязательный) - Значение, используемое в качестве this при выполнении функции callback.  

Возвращаемое значение  
true, если функция проверки возвращает truthy значение хотя бы для одного элемента массива. Иначе, false.  
*/

// Array.prototype.some =

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
//
// =======================================================================================
/*  
Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции,  
выполнение которой ограничено заданным временем. Функция fn принимает аргументы,  
переданные в эту новую функцию.  

Возвращаемая функция работает по следующим правилам:  
- если fn выполнится за заданное время t, то функция Resolves полученные данные  
- если fn не выполнится за заданное время t, то функция реджектит строку "Time limit exceeded"  
*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimited = function (fn, t) {
  // your code
};

const timeLimited = function (fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject("Time limit exceeded");
      }, t);

      Promise.resolve(fn(...args))
        .then((result) => {
          clearTimeout(timeoutId);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  };
};

// =================================================================================

/**
 * Дан массив. Необходимо отсортировать нечетные по значению числа по возрастанию,
 * а чёткие оставить на своих местах.
 */

function oddSort(numbers) {
  // your code here
}

console.log(oddSort([2, 3, 7, 4, 6, 1, 5, 8, 9])); // [2, 1, 3, 4, 6, 5, 7, 8, 9]
console.log(oddSort([2, 4, 6, 8])); // [2, 4, 6, 8]
console.log(oddSort([3, 7, 1, 5, 9])); // [1, 3, 5, 7, 9]

// =================================================================================
