// for promises tasks

// Promise.all - Ждем все промисы, если хоть один с ошибкой - catch, иначе then
// Promise.allSettled - просто ждем выполнения всех промисов (всегда then) - опишет ошибку одного из промисов внутри вернувшихся данных
// Promise.race - получаем первый ЛЮБОЙ выполнившийся промис - неважно какой!, даже ошибочный
// Promise.any - получаем первый УСПЕШНО выполнившийся промис

// Resolve или Reject = вызовется только первый, так как состояние промиса может быть изменено только 1 раз, последующие - игнор
// Также заметим, что функция resolve/reject ожидает только один аргумент (или ни одного). Все дополнительные аргументы будут проигнорированы.

// * ==============================================================================================

function run() {
  console.log("1");

  const p = new Promise((resolve, reject) => {
    console.log("2");

    setTimeout(() => {
      console.log("3");
      const data = { id: 1, name: "Alex" };
      console.log("4");
      resolve(data);
      console.log("5");
    }, 1000);
  });

  console.log(p);

  p.then((data) => {
    console.log(data);
    console.log("6");
  });

  console.log("7");
}

run();

//*  ================================= Пример с двумя запросами ==========================================

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Andrew" };
      resolve(data);
    }, 1000);
  });
}

//* Функция должна возвращать промис, поэтому нет смысла создавать переменную и ее же возвращать

// const p = new Promise();
// return p;

function fetchUserGame(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["game1", "game2"];
      resolve(data);
    }, 1000);
  });
}
function run() {
  fetchUser()
    .then((userData) => {
      return fetchUserGame(userData.id);
    })
    .then((userGames) => {
      console.log(userGames);
    });
}

//*  ================================= Тренировка с разными методами ==========================================
// Promise.all
// Promise.allSettled
// Promise.any
// Promise.race

// * ==============================================================================================
//Что выведет консоль

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.reject("D");
  })
  .catch((err) => {
    console.log(err);
    return "E";
  })
  .finally(() => {
    console.log("F");
  });

(async () => {
  console.log("G");
  try {
    await Promise.reject("H");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("I");
  }
})(); // IIFE

console.log("J");

// A G J C E F H      D F   I    B // не доедлано
// * ==============================================================================================

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log(4);
    setTimeout(() => {
      console.log(5);
    }, 0);
  })
  .then(() => {
    console.log(6);
  });

setTimeout(() => {
  console.log(7);
}, 0);

console.log(7);

// * ==============================================================================================

Promise.resolve(1)
  .then((x) => console.log(1))
  .catch((x) => console.log(2))
  .then((x) => console.log(3));

Promise.reject(2)
  .then((x) => console.log(4))
  .then((x) => console.log(5))
  .catch((x) => console.log(6))
  .then((x) => console.log(7));

Promise.resolve(1)
  .then(() => console.log("2"))
  .then(() => console.log("3"));

Promise.reject(2)
  .catch(() => console.log("4"))
  .then(() => console.log("5"));

// * ==============================================================================================

console.log(1);

let p = new Promise(function (resolve, reject) {
  console.log(2);
  resolve();
});

p.then(() => console.log(3));

Promise.resolve().then(() => console.log(4));

Promise.resolve().then(() => setTimeout(() => console.log(6), 0));

setTimeout(() => console.log(5), 0);

console.log(7);

// * ==============================================================================================
