import React from "react";
import Card from "../../components/Card";
import TextField from "@mui/material/TextField";
import Divider from "../../components/Divider";
import clsx from "clsx";
import useIsMobile from "../../utils/useIsMobile";

const Setup = ({
  setGameState,
  maxTurnTime,
  setMaxTurnTime,
  playerNames,
  setPlayerNames,
  errorMessage,
  setErrorMessage,
  playerCount,
  setPlayerCount,
}) => {
  const isReady =
    !!playerNames.player1 &&
    !!playerNames.player2 &&
    !!playerNames.player3 &&
    !!playerNames.player4 &&
    !!playerNames.player5 &&
    !!playerNames.player6;

  const isMobile = useIsMobile();

  return (
    <Card>
      <div className="flex flex-col">
        <div className="w-full text-lg">Catan Buddy</div>
        <Divider />
        <div>
          &emsp;Catan Buddy is a support application for the popular board game
          Settlers of Catan. My family and I have been Catan enjoyers for years,
          even having a seasonal Cho family championship. However, we have
          always struggled to have quick dice rolls, keep each player equitable
          in time, and remember what was rolled previously. After being
          unsuccessful in find an app to do this, I decided to create Catan
          Buddy! Feel free to pull this up the next time you think someone is
          taking too long to move... For other disputes,{" "}
          <a
            className="underline"
            href="https://www.catan.com/sites/default/files/2021-06/catan_base_rules_2020_200707.pdf"
          >
            here
          </a>{" "}
          are the rules.
        </div>
        <Divider />
        <div
          className={clsx("grid  gap-4", {
            "grid-cols-2": isMobile,
            "grid-cols-3": !isMobile,
          })}
        >
          <div className="flex items-center">
            <span className="mr-2">Turn Time:</span>
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
            <div>Player Count: {playerCount}</div>
            <div className="ml-2 border rounded-md flex">
              <div
                className="cursor-pointer text-center hover:bg-gray-200 p-1 text-sm"
                onClick={() => {
                  if (playerCount > 2) {
                    setPlayerCount((p) => {
                      return p - 1;
                    });
                  }
                }}
              >
                -
              </div>
              <div className="w-px bg-gray-200"></div>
              <div
                className="cursor-pointer text-center hover:bg-gray-200 p-1 text-sm"
                onClick={() => {
                  if (playerCount < 6) {
                    setPlayerCount((p) => {
                      return p + 1;
                    });
                  }
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Player 1 Name:</span>
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
            <span className="mr-2">Player 2 Name:</span>
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
          {playerCount >= 3 && (
            <div className="flex items-center">
              <span className="mr-2">Player 3 Name:</span>
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
          )}
          {playerCount >= 4 && (
            <div className="flex items-center">
              <span className="mr-2">Player 4 Name:</span>
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
          )}
          {playerCount >= 5 && (
            <div className="flex items-center">
              <span className="mr-2">Player 5 Name:</span>
              <TextField
                value={playerNames.player5}
                onChange={(e) => {
                  setPlayerNames((previousNames) => {
                    return { ...previousNames, player5: e.target.value };
                  });
                }}
                size="small"
                style={{ width: 100 }}
              />
            </div>
          )}
          {playerCount >= 6 && (
            <div className="flex items-center">
              <span className="mr-2">Player 6 Name:</span>
              <TextField
                value={playerNames.player6}
                onChange={(e) => {
                  setPlayerNames((previousNames) => {
                    return { ...previousNames, player6: e.target.value };
                  });
                }}
                size="small"
                style={{ width: 100 }}
              />
            </div>
          )}
        </div>
        <Divider />
        <div
          className="p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
          onClick={() => {
            // if (isReady) {
            //   setGameState("Placement");
            //   setErrorMessage("");
            // } else {
            //   setErrorMessage("Please make sure all fields are filled out!");
            // }
            setGameState("Placement");
            setErrorMessage("");
          }}
        >
          Start
        </div>
        {!!errorMessage && (
          <div className="text-red-900 text-center mt-2">{errorMessage}</div>
        )}
      </div>
    </Card>
  );
};

export default Setup;
