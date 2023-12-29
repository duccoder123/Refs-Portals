import { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";
// let timer;
export default function TimerChallenger({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStart ? handleStop : handleStart}>
            {timerStart ? "Stop" : "Start"} Challege
          </button>
        </p>
        <p className={timerStart ? "active" : undefined}>
          {timerStart ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
