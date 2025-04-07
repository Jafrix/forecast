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
      resolve(data); // Не сразу попадаем в ЗЕН ! Сначала выполняется ВСЕ внутри Таймаута !
      console.log("5");
    }, 1000);
  });

  console.log(p); //Promise{pending}, потому что не прошлись одним из методов - then\catch
  //   then - вызовется когда кто то вызовет resolve внутри промиса !

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
