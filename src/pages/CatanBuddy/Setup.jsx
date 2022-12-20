import React from "react";
import Card from "../../components/Card";
import TextField from "@mui/material/TextField";
import Divider from "../../components/Divider";

const roll = () => {
  return Math.round(Math.random());
};

const Setup = ({
  setGameState,
  maxTurnTime,
  setMaxTurnTime,
  maxPlaceTime,
  setMaxPlaceTime,
  playerNames,
  setPlayerNames,
  errorMessage,
  setErrorMessage,
}) => {
  const isReady =
    !!playerNames.player1 &&
    !!playerNames.player2 &&
    !!playerNames.player3 &&
    !!playerNames.player4;

  return (
    <Card>
      <div className="flex flex-col">
        <div className="w-full text-lg">Catan buddy</div>
        <Divider />
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center">
            <span className="">Set Turn Time:</span>
            <TextField
              value={maxTurnTime}
              onChange={(e) => {
                setMaxTurnTime(e.target.value);
              }}
              type="number"
              size="small"
              style={{ width: 100 }}
            />
          </div>
          <div className="flex items-center">
            <span className="">Set Placement Time:</span>
            <TextField
              value={maxPlaceTime}
              onChange={(e) => {
                setMaxPlaceTime(e.target.value);
              }}
              type="number"
              size="small"
              style={{ width: 100 }}
            />
          </div>
          <div className="flex items-center">
            <span className="">Player 1 Name:</span>
            <TextField
              value={playerNames.player1}
              onChange={(e) => {
                setPlayerNames((previousNames) => {
                  return { ...previousNames, player1: e.target.value };
                });
              }}
              size="small"
              style={{ width: 100 }}
            />
          </div>
          <div className="flex items-center">
            <span className="">Player 2 Name:</span>
            <TextField
              value={playerNames.player2}
              onChange={(e) => {
                setPlayerNames((previousNames) => {
                  return { ...previousNames, player2: e.target.value };
                });
              }}
              size="small"
              style={{ width: 100 }}
            />
          </div>
          <div className="flex items-center">
            <span className="">Player 3 Name:</span>
            <TextField
              value={playerNames.player3}
              onChange={(e) => {
                setPlayerNames((previousNames) => {
                  return { ...previousNames, player3: e.target.value };
                });
              }}
              size="small"
              style={{ width: 100 }}
            />
          </div>
          <div className="flex items-center">
            <span className="">Player 4 Name:</span>
            <TextField
              value={playerNames.player4}
              onChange={(e) => {
                setPlayerNames((previousNames) => {
                  return { ...previousNames, player4: e.target.value };
                });
              }}
              size="small"
              style={{ width: 100 }}
            />
          </div>
        </div>
        <Divider />
        <div
          className="p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
          onClick={() => {
            console.log(roll());
            if (isReady) {
              setGameState("inGame");
              setErrorMessage("");
            } else {
              setErrorMessage("Please make sure all fields are filled out!");
            }
          }}
        >
          Start game
        </div>
        {!!errorMessage && (
          <div className="text-red-900 text-center">{errorMessage}</div>
        )}
      </div>
    </Card>
  );
};

export default Setup;
