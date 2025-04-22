// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)


// !=========================================================================
// import React from "react";

// const ToDoList = {
//   today: [
//     { id: 1, text: "Полить цветы" },
//     { id: 2, text: "Помыть машину" },
//     { id: 3, text: "Выкинуть мусор" },
//   ],
//   tomorrow: [],
// };

// const App = () => {
//     return (
//     <div>
//       <h2>Сегодня:</h2>
//       <div>
//         <ul>
//           {ToDoList.today.length &&
//             ToDoList.today.map((item) => <li>{item.text}</li>)}
//         </ul>
//         <button>Удалить</button>
//         <input />
//         <button>Добавить</button>
//       </div>
//       <h2>Завтра:</h2>
//       <div>
//         <ul>
//           {ToDoList.tomorrow.length &&
//             ToDoList.tomorrow.map((item) => <li>{item.text}</li>)}
//         </ul>
//         <button>Удалить</button>
//         <input />
//         <button>Добавить</button>
//       </div>
//     </div>
//   );
// };

// export default App;
