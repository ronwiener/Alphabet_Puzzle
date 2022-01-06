import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header1 = ({ images, setSelected }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              component="div"
              sx={{ flexGrow: 1 }}
              style={{
                fontSize: matchesXS
                  ? "10px"
                  : matchesSM
                  ? "14px"
                  : matchesMD
                  ? "22px"
                  : "28px",
                marginLeft: matchesXS
                  ? "7px"
                  : matchesSM
                  ? "10px"
                  : matchesMD
                  ? "20px"
                  : "25px",
              }}
            >
              A to Z Sliding Puzzle
            </Typography>
            <Button variant="text" onClick={() => setSelected(images.arch)}>
              <Typography
                style={{
                  color: "white",
                  marginRight: matchesXS
                    ? "20px"
                    : matchesSM
                    ? "40px"
                    : matchesMD
                    ? "60px"
                    : "80px",
                  fontSize: matchesXS
                    ? "8px"
                    : matchesSM
                    ? "12px"
                    : matchesMD
                    ? "18px"
                    : "22px",
                }}
              >
                Urban Letters
              </Typography>
            </Button>
            <Button variant="text" onClick={() => setSelected(images.neon)}>
              <Typography
                style={{
                  color: "white",
                  marginRight: matchesXS
                    ? "20px"
                    : matchesSM
                    ? "40px"
                    : matchesMD
                    ? "60px"
                    : "80px",
                  fontSize: matchesXS
                    ? "8px"
                    : matchesSM
                    ? "12px"
                    : matchesMD
                    ? "18px"
                    : "22px",
                }}
              >
                Neon Letters
              </Typography>
            </Button>

            <Button variant="text" onClick={handleOpen}>
              <Typography
                style={{
                  color: "white",
                  fontSize: matchesXS
                    ? "8px"
                    : matchesSM
                    ? "12px"
                    : matchesMD
                    ? "18px"
                    : "22px",
                }}
              >
                Rules
              </Typography>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box width={matchesXS ? 250 : matchesSM ? 300 : 450} sx={styles}>
                <Typography
                  style={{ color: "black" }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  How to Play:
                </Typography>
                <Typography
                  style={{ color: "black" }}
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  <ul>
                    <li>
                      Click on <b>ARCHITECTURAL</b> or <b>NEON</b> to select
                      letters.
                    </li>
                    <li>
                      Click <b>START</b> to scramble letters and begin the game
                      timer.
                    </li>
                    <li>
                      Click on a letter to move it to the available open space.
                    </li>
                    <li>
                      To win, position the letters back to their original
                      places. The letters must be in the exact order as they
                      appeared at the start.
                    </li>
                    <li>Try to beat your best time in the next game!</li>
                  </ul>
                </Typography>
              </Box>
            </Modal>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header1;
