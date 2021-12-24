import React, { useState } from "react";
import Board from "./Board";
import Modal from "./Modal";
import "./Game.css";
import { Letters } from "../Letters";
import { Neon } from "../NeonLetters";
//Credits to: Barely Coding with Daniel Bark

function App() {
  const arch = [...Letters];
  const neon = [...Neon];
  const images = { arch, neon };

  const [selected, setSelected] = useState(images.arch);

  return (
    <div className="App">
      <div className="title">
        <h2>ABC Sliding Puzzle Game</h2>
      </div>
      <Modal />
      <div>
        <button className="btn" onClick={() => setSelected(images.arch)}>
          Architectural
        </button>
        <button className="btn" onClick={() => setSelected(images.neon)}>
          Neon
        </button>
      </div>
      <div>
        <Board rows={5} cols={6} width={500} height={700} images={selected} />
      </div>
    </div>
  );
}
export default App;
