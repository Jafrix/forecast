import React, { useEffect, useState, useMemo, useCallback } from "react";
import { View } from "./view/view";

export const Task6 = () => {
  const [someArray, setSomeArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const onBtnClick = () => {
    setSomeArray((prevArr) => {
      if (prevArr.every((item) => item === 1)) {
        return prevArr;
      }
      const indicies = prevArr
        .map((item, index) => (item === 0 ? index : -1))
        .filter((index) => index !== -1);

      const randomInd = indicies[Math.floor(Math.random() * indicies.length)];
      console.log(someArray);
      return prevArr.map((item, index) => (index === randomInd ? 1 : item));
    });
  };

  return <View onBtnClick={onBtnClick} someArray={someArray} />;
};

// ===========================================================================================

import React, { useState, useEffect, useRef, use } from "react";
import styles from "./task2.module.scss";

export const Task2 = () => {
  const [timerValue, setTimerValue] = useState<number>(0);
  const [isStop, setIsStop] = useState(true);

  const onBtnClick = () => {
    setIsStop((prev) => !prev);
  };

  useEffect(() => {
    if (isStop) return;

    const interval = setInterval(() => {
      setTimerValue((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval)
    };
  }, [isStop]);

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onBtnClick}>
        {timerValue}
      </button>
    </div>
  );
};
