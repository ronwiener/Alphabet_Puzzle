import React, { useState } from "react";
import Header1 from "./Components/Header1";
import Grid from "@mui/material/Grid";
import Board1 from "./Components/Board1";
//import "./Game.css";
import { Letters } from "./Assets/Letters";
import { Neon } from "./Assets/NeonLetters";
//Credits to: Barely Coding with Daniel Bark

function App1() {
  const arch = [...Letters];
  const neon = [...Neon];
  const images = { arch, neon };

  const [selected, setSelected] = useState(images.arch);

  return (
    <Grid container xs={12} justifyContent="center">
      <Header1 images={images} setSelected={setSelected} />

      <Board1 rows={5} cols={6} width={500} height={700} images={selected} />
    </Grid>
  );
}
export default App1;
