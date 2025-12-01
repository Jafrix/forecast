import { memo, useEffect, useLayoutEffect, useState } from "react";

//! ==========  Example 1  ==========================================================================================

export const Parent = () => {
  const [num, setNum] = useState(false);

  console.log("Parent Render");

  const clickHandler = () => setNum(prev => prev + 1);

  useEffect(() => {
    console.log("Parent useEffect");
    return () => {
      console.log("Parent Clean Up useEffect");
    };
  }, [num]);

  useLayoutEffect(() => {
    console.log("Parent useLayoutEffect");
    return () => {
      console.log("Parent Clean Up useLayoutEffect");
    };
  }, [num]);

  return (
    <div>
       <h2>Render</h2>

      <Child num={num}/>
     
      <button onClick={clickHandler}>render</button>
      <div style={{ fontSize: "45px", textAlign: "center" }}>{num}</div>
      {/* {console.log("I am Parent in DOM")} */}
    </div>
  );
};

export const Child = ({num}) => {
  console.log("CHILD Render");

  useEffect(() => {
    console.log("CHILD useEffect");
    return () => {
      console.log("CHILD Clean Up useEffect");
    };
  }, [num]);

  useLayoutEffect(() => {
    console.log("CHILD useLayoutEffect");
    return () => {
      console.log("CHILD Clean Up useLayoutEffect");
    };
  }, [num]);

  return (
    <div>
      {/* <Child2 /> */}
      Render Child in DOM!
      {/* {console.log("I am Child in DOM")} */}
    </div>
  );
};

// export const Child2 = () => {
//   console.log("CHILD 2");

//   useEffect(() => {
//     console.log("CHILD useEffect 10");
//   }, []);

//   useLayoutEffect(() => {
//     console.log("CHILD useLayoutEffect 10");
//   }, []);

//   return (
//     <div>
      
//       Render Child-2 in DOM!
//       {console.log("I am Child-2 in DOM")}
//     </div>
//   );
// };

//? ==================== Explanation ==================================================================

//* В React есть чёткое разделение на два основных этапа при рендере компонента:

//* 1. Фаза Render (или «подготовка к коммиту»)

//* Тут вызывается сам компонент как функция (все console.log внутри тела компонента, включая те, что в JSX-выражениях, срабатывают именно на этой фазе).
//* На этом этапе React собирает описание виртуального DOM, но ещё не применяет изменения к настоящему DOM.
//* 2. Фаза Commit (или «применение»)

//* React обновляет (или монтирует) реальный DOM элементами, описанными в виртуальном DOM.
//* Только после этого React вызывает все layout-эффекты (включая useLayoutEffect) и чуть позже — обычные эффекты (useEffect).

//* Таким образом:

//* console.log("I am PArent in DOM") и console.log("I am Child in DOM") выполняются в тот момент, когда React «вычисляет» JSX на фазе Render – до того, как будет вызван useLayoutEffect.
//* useLayoutEffect (и useEffect) вызываются уже на фазе Commit после того, как реальные изменения в DOM были внесены (но до или после отрисовки на экране в случае useLayoutEffect / useEffect соответственно).
//* Именно поэтому вы видите console.log в JSX раньше, чем логи внутри колбэков useLayoutEffect. Такое поведение заложено в архитектуру React:

//* 1. Компонент (как функция) сначала вычисляется. Вся логика, которая находится в теле функции, отрабатывает немедленно, включая создание элементов JSX и любые console.log.
//* 2. Затем React рендерит (commit) изменения в DOM и после этого запускает эффекты:
//* useLayoutEffect вызывается сразу после того, как изменения попадут в DOM, но до того, как браузер «покажет» эти изменения на экране (то есть «синхронно» с коммитом).
//* useEffect вызывается после того, как браузер уже успеет «отрисовать» обновлённый DOM.

//? ==================== Rerender, when ? =================================================================

//* 1. Mount в FE (ComponentDidMount в классовых компонентах) - можно узнать по вызову юзЭффекта с пустыми зависимостями
//* 2. Update в FE (ComponentDidUpdate в классовых компонентах) - вызывается при: Изменении стейта, пропсов или перерендере родителя, если они не мемоизированы.
//* Привязаться можно через юзЭффект с массивом зависимостей
//* 3. Unmount в FE (ComponentWillUnmount в классовых компонентах) - Размонтирование компоненты из ДОМ дерева, нужны не забыть отписаться от таймеров, обработчиков или вебсокетов.
//* Отписки через Cleanup функцию внутри юзЭффекта

//! ==================  Example 2  ==================================================================================

// export const Child = ({ num }) => {
//   console.log("child: render");

//   useEffect(() => {
//     console.log("child: effect");
//     return () => {
//       console.log("child: cleanup effect");
//     };
//   }, [num]);

//   return null;
//  };

//  export const Parent = () => {
//   const [num, setNum] = useState(0);

//   console.log("parent: render");

//   const clickHandler = () => setNum((prev) => prev + 1);

//   useLayoutEffect(() => {
//     console.log("parent: layout effect");
//     return () => {
//       console.log("parent: cleanup layout effect");
//     };
//   }, [num]);

//   useEffect(() => {
//     console.log("parent: effect");
//     return () => {
//       console.log("parent: cleanup effect");
//     };
//   }, [num]);

//   return (
//     <>
//       <Child num={num} />
//       <button onClick={clickHandler}>render</button>
//       <div style={{ fontSize: "45px", textAlign: "center" }}>{num}</div>
//     </>
//   );
//  };

//  ? ================= Answers =====================

// 1. parent: render
// 2. child: render

// 3. parent: cleanup layout effect
// 4. parent: layout effect

// 5. child: cleanup effect
// 6. parent: cleanup effect

// 7. child: effect
// 8. parent: effect
//! ====================================================================================================
