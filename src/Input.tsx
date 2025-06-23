import React, { useMemo, useState } from "react";

function letterCounter(txt: string): string {
  const sortLetter = [...txt].reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, []);

  return Object.entries(sortLetter)
    .map(([key, value]) => {
      if (key === " ") {
        key = "Пробел";
      }
      return `${key} = ${value}\n`;
    })
    .join("");
}

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function Input() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  //  const res = letterCounter(text)

  const debouncer = useMemo(
    () =>
      debounce((txt) => {
        const res = letterCounter(txt);
        setResult(res);
      }, 1000),
    []
  );

  const handleChange = (e) => {
    setText(e.target.value);
    debouncer(e.target.value);
  };

  const handleDelete = () => {
    setText("");
    setResult("");
  };
  return (
    <>
      <h2>Letter counter and Debouncer</h2>
      <label>
        <input
          style={{
            padding: "8px 15px",
            borderRadius: "8px",
            outline: "none",
            border: "none",
          }}
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button style={{ marginLeft: "20px" }} onClick={handleDelete}>
          Удоли
        </button>
      </label>
      <div style={{ fontSize: "20px" }}>
        В твоем слове:{" "}
        <div style={{ fontWeight: "600", color: "YELLOW", padding: "8px" }}>
          {text}
        </div>
      </div>
      <div style={{ fontSize: "20px" }}>
        {" "}
        Смотри сколько букв в твоем слове:{" "}
        <span style={{ fontWeight: "600", color: "blue", padding: "8px" }}>
          <pre>{result}</pre>
        </span>
      </div>
    </>
  );
}

export default Input;
