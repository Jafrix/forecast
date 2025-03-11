import { useState } from "react";

import "./App.css";
import InfiniteScrollList from "./InfiniteScroll";
import Parent, { App2 } from "./Parent";

function App() {
  const [count, setCount] = useState(0);

  const updateClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    console.log(count);
  };

  return (
    <>
      <div></div>
      <h1>React App</h1>
      <div className="card">
        <button onClick={updateClick}>count is {count}</button>
      </div>
      <hr></hr>
      <App2 />
      {/* <InfiniteScrollList /> */}
    </>
  );
}

export default App;
