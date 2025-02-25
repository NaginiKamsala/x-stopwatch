import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [curTime, setCurTime] = useState(0);
  const [toggle, setToggle] = useState("Start");
  const [reset, setReset] = useState(false);

  const [intervalId, setIntervalId] = useState(null);

  const handleWatch = (id) => {
    toggle === "Start" ? setToggle("Stop") : setToggle("Start");
    if (!intervalId) {
      const timer = setInterval(() => {
        setCurTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(timer);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = (id) => {
    setCurTime(0);
    if (id) {
      clearInterval(id);
      setIntervalId(null);
    }
  };

  const formatted = () => {
    let minutes = Math.floor(Number(curTime) / 60);
    let seconds = Number(curTime) % 60;
    // if (String(minutes).length < 2) minutes = "0" + String(minutes);
    if (String(seconds).length < 2) seconds = "0" + String(seconds);

    return `${minutes}:${seconds}`; //60 + ' ' +;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time: {formatted()}</div>
      <div>
        <button type="button" onClick={() => handleWatch(intervalId)}>
          {toggle}
        </button>
        <button type="button" onClick={() => handleReset(intervalId)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
