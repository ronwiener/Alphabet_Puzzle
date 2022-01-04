import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [counter, setCounter] = useState(10);
  const [gameOver, setGameOver] = useState("");

  let gameMessage = "Game Over, Try Again";

  useEffect(() => {
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
    <div
      style={{
        color: "red",
        fontWeight: matchesXS ? "400" : "600",
        letterSpacing: matchesXS ? "1px" : "2px",
        fontSize: matchesXS
          ? "12px"
          : matchesSM
          ? "14px"
          : matchesMD
          ? "20px"
          : "22px",
      }}
    >
      {counter === 0 ? (
        gameMessage
      ) : (
        <div
          style={{
            color: "white",
            fontSize: matchesXS
              ? "12px"
              : matchesSM
              ? "14px"
              : matchesMD
              ? "20px"
              : "22px",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            Time:
          </span>
          {format(counter)}
        </div>
      )}
    </div>
  );
};
export default Countdown;
