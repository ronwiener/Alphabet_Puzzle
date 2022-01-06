import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../Styles/Game.css";

const Countup = ({ setIsStarted, solved }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = useState(0);

  //let gameMessage = "Puzzle Solved!!";

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }
    if (solved) {
      setIsStarted(false);
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, counter, setIsStarted, solved, setIsActive]);

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
      {solved ? (
        <div
          style={{
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
              color: "yellow",
            }}
          >
            Time:
          </span>
          <span style={{ color: "white" }}>
            {" "}
            {minute}:{second}
          </span>{" "}
          <span id="neon-orange">Puzzle </span>
          <span id="neon-blue">Solved!!</span>
        </div>
      ) : (
        <div
          style={{
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
              color: "yellow",
            }}
          >
            Time:
          </span>
          <span style={{ color: "white" }}>
            {" "}
            {minute}:{second}
          </span>
        </div>
      )}
    </div>
  );
};
export default Countup;
