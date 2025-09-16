import { useState } from "react";

import "./App.css";
// import InfiniteScrollList from "./InfiniteScroll";
import { Parent } from "./Parent";
// import { ClientList } from "./ClientList";
import Input from "./Input";

function App() {
  const [count, setCount] = useState(0);

  const updateClick = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // console.log(count);
  };

  return (
    <>
      <div></div>
      <h1 style={{ marginBottom: "10rem" }}>Know your "React App"</h1>
      <hr></hr>
      
      <hr></hr>
      <Input />
      <hr></hr>
      <h2>Counter</h2>
      <div className="card">
        <button onClick={updateClick}>count is {count}</button>
      </div>
      <hr></hr>
      <Parent />
      <hr></hr>
      
      
      {/* <ClientList /> */}
      {/* <InfiniteScrollList /> */}
    </>
  );
}

export default App;
