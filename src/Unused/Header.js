import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const Header = ({ images, setSelected }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              A to Z Sliding Puzzle
            </Typography>
            <Button variant="text" onClick={() => setSelected(images.arch)}>
              <Typography style={{ color: "white", marginRight: "40px" }}>
                Architectural Letters
              </Typography>
            </Button>
            <Button variant="text" onClick={() => setSelected(images.neon)}>
              <Typography style={{ color: "white", marginRight: "40px" }}>
                Neon Letters
              </Typography>
            </Button>
            <Button variant="text">
              <Typography style={{ color: "white" }}> Rules </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
