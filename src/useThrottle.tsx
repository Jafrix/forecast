import { useRef, useState } from "react";

function useThrottle(callback, delay) {
  const lastCall = useRef(0);

  return useCallback(
    (...args) => {
      const now = new Date().getTime();

      if (now - lastCall.current >= delay) {
        callback(...args);
        lastCall.current = now;
      }
    },
    [callback, delay]
  );
}

function SubmitButton() {
  const [count, setCount] = useState(0);

  const handleClick = useThrottle(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <>
      <button onClick={handleClick}>Submit</button>
      <p>Clicks: {count}</p>
    </>
  );
}
