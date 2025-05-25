import React, { useState } from "react";

import Setup from "./Setup";
import Game from "./Game";

const CatanBuddy = () => {
  // game state
  const [gameState, setGameState] = useState("Setup");
  const [maxTurnTime, setMaxTurnTime] = useState(90);
  const [playerCount, setPlayerCount] = useState(4);
  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  if (gameState === "Setup") {
    return (
      <Setup
        setGameState={setGameState}
        maxTurnTime={maxTurnTime}
        setMaxTurnTime={setMaxTurnTime}
        playerNames={playerNames}
        setPlayerNames={setPlayerNames}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        playerCount={playerCount}
        setPlayerCount={setPlayerCount}
      />
    );
  }

  return (
    <Game
      setGameState={setGameState}
      maxTurnTime={maxTurnTime}
      playerNames={playerNames}
      setPlayerNames={setPlayerNames}
      playerCount={playerCount}
    />
  );
};

export default CatanBuddy;
