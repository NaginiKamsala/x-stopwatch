import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => {
        setElapsedTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingseconds = seconds % 60;
    return `${minutes}: ${
      remainingseconds < 10 ? "00" : ""
    }${remainingseconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <div>
        <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
