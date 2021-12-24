import React, { useState } from "react";
import "../Styles/Game.css";

const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time) => {
  // Convert seconds into minutes and take the whole part
  const minutes = Math.floor(time / 60);

  // Get the seconds left after converting minutes
  const seconds = time % 60;

  //Return combined values as string in format mm:ss
  return `${minutes}:${padTime(seconds)}`;
};

const Countdown = ({ setIsStarted }) => {
  const [counter, setCounter] = useState(5);
  const [gameOver, setGameOver] = useState("");

  let gameMessage = "Game Over, Try Again";

  React.useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }
    if (counter === 0) {
      setGameOver((gameMessage) => gameMessage);
      setIsStarted(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter, setIsStarted, setGameOver]);

  return (
    <div>
      {counter === 0 ? (
        gameMessage
      ) : (
        <div style={{ color: "white" }}>Timer: {format(counter)}</div>
      )}
    </div>
  );
};
export default Countdown;
