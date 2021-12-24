import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header1 = ({ images, setSelected }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginLeft: "20px" }}
            >
              A to Z Sliding Puzzle
            </Typography>
            <Button variant="text" onClick={() => setSelected(images.arch)}>
              <Typography style={{ color: "white", marginRight: "80px" }}>
                Architectural Letters
              </Typography>
            </Button>
            <Button variant="text" onClick={() => setSelected(images.neon)}>
              <Typography style={{ color: "white", marginRight: "80px" }}>
                Neon Letters
              </Typography>
            </Button>

            <Button variant="text" onClick={handleOpen}>
              <Typography style={{ color: "white" }}>Rules</Typography>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
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
                      letters
                    </li>
                    <li>
                      Click <b>START</b> to scramble letters and begin countdown
                      timer
                    </li>
                    <li>
                      Click on a letter to move it to the available open space
                    </li>
                    <li>
                      Position the letters back to their original places before
                      the timer gets to 0
                    </li>
                    <li>
                      To win, the letters must be in the exact order as they
                      appeared at the start
                    </li>
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
