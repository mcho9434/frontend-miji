import React, { useState } from "react";

import Setup from "./Setup";
import Game from "./Game";
const CatanBuddy = () => {
  // game state
  const [gameState, setGameState] = useState("Setup");
  const [maxTurnTime, setMaxTurnTime] = useState(90);
  const [maxPlaceTime, setMaxPlaceTime] = useState(180);
  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  if (gameState === "Setup") {
    return (
      <Setup
        setGameState={setGameState}
        maxTurnTime={maxTurnTime}
        setMaxTurnTime={setMaxTurnTime}
        maxPlaceTime={maxPlaceTime}
        setMaxPlaceTime={setMaxPlaceTime}
        playerNames={playerNames}
        setPlayerNames={setPlayerNames}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    );
  }
  return (
    <Game
      setGameState={setGameState}
      maxTurnTime={maxTurnTime}
      maxPlaceTime={maxPlaceTime}
      playerNames={playerNames}
      setPlayerNames={setPlayerNames}
    />
  );
};

export default CatanBuddy;
