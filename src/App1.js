import React, { useState } from "react";
import Header1 from "./Components/Header1";
import Grid from "@mui/material/Grid";
import Board1 from "./Components/Board1";

import { Letters } from "./Assets/Letters";
import { Neon } from "./Assets/NeonLetters";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//Credits to: Barely Coding with Daniel Bark

function App1() {
  const arch = [...Letters];
  const neon = [...Neon];
  const images = { arch, neon };

  const [selected, setSelected] = useState(images.arch);

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container justifyContent="center">
      <Header1 images={images} setSelected={setSelected} />

      <Board1
        rows={5}
        cols={6}
        width={matchesXS ? 250 : matchesSM ? 275 : matchesMD ? 450 : 500}
        height={matchesXS ? 350 : matchesSM ? 385 : matchesMD ? 630 : 700}
        images={selected}
      />
    </Grid>
  );
}
export default App1;
