import React, { useState } from "react";
import Tile from "./Tile";
import Countdown from "./Countdown";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { canSwap, swap, shuffle, isSolved } from "../Helpers/Helper";
import "../Styles/Game.css";

function Board1(props) {
  const { rows, cols, width, height, images } = props;
  const [tiles, setTiles] = useState([...Array(rows * cols).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles, rows, cols);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1), rows, cols)) {
      const newTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
      setTiles(newTiles);
    }
  };
  //starts the timer or display nothing
  const handleTileClick = (index) => {
    if (isStarted) {
      return swapTiles(index);
    }
    return null;
  };
  //starts the timer or displays nothing, setGameOver keeps the Countdown as truthy boolean
  const handleStartButton = () => {
    shuffleTiles();
    setIsStarted(true);
    setGameOver(true);
  };

  const solved = isSolved(tiles);
  //resets tiles and setGameOver makes the Countdown a falsey boolean
  const handleResetButton = () => {
    setTiles([...Array(rows * cols).keys()]);
    setIsStarted(false);
    setGameOver(false);
  };

  const pieceWidth = Math.round(width / cols);
  const pieceHeight = Math.round(height / rows);

  const style = {
    width,
    height,
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Grid item>
        <ul style={style} className="board">
          {tiles.map((tile, index) => (
            <Tile
              {...props}
              index={index}
              tile={tile}
              key={tile}
              width={pieceWidth}
              height={pieceHeight}
              image={images[tile]}
              onClick={handleTileClick}
            />
          ))}
        </ul>
      </Grid>

      <div>
        {solved && isStarted ? (
          <div>
            <span id="neon-orange">Puzzle </span>
            <span id="neon-blue">Solved!!</span>
          </div>
        ) : (
          " "
        )}
      </div>

      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <Button variant="text" onClick={handleStartButton}>
            {!isStarted || solved ? "START" : "Re-Scramble"}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" onClick={handleResetButton}>
            RESET
          </Button>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            {isStarted || gameOver ? (
              <Countdown setIsStarted={setIsStarted} />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Board1;
