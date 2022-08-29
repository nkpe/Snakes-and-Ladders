import React from "react";
import PlayerPiece from "./PlayerPiece";

function Header() {
    return (
      <div className="App">
        <header className="App-header">
            <PlayerPiece />
          <h1>Snakes & Ladders</h1>
        </header>
      </div>
    );
  }

export default Header;