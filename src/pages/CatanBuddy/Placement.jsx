import React, { useState } from "react";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
import One from "./Dice/One";
import Two from "./Dice/Two";
import Three from "./Dice/Three";
import Four from "./Dice/Four";
import Five from "./Dice/Five";
import Six from "./Dice/Six";
import clsx from "clsx";
import useIsMobile from "../../utils/useIsMobile";

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const rollMap = {
  1: <One />,
  2: <Two />,
  3: <Three />,
  4: <Four />,
  5: <Five />,
  6: <Six />,
};

const Placement = ({
  setGameState,
  maxTurnTime,
  maxPlaceTime,
  playerNames,
  setPlayerNames,
}) => {
  // const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [needRoll, setNeedRoll] = useState(true);

  const [diceRoll, setDiceRoll] = useState([
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ]);

  // const [isCounting, setIsCounting] = useState(false);
  // const [timeRemaining, setTimeRemaining] = useState(maxTurnTime);
  // const [isTimeUp, setIsTimeUp] = useState(false);

  const players = [
    playerNames.player1,
    playerNames.player2,
    playerNames.player3,
    playerNames.player4,
  ];

  // let firstPlayer = -1;
  // if (diceRoll[0][0] !== -1) {
  // }
  const playerArray = [0, 1, 2, 3];
  const isMobile = useIsMobile();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isCounting) {
  //       setTimeRemaining((prevTime) => {
  //         return prevTime - 1;
  //       });
  //       if (timeRemaining <= 0) {
  //         setIsTimeUp(true);
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [isCounting, timeRemaining]);

  return (
    <Card>
      <div className="flex flex-col">
        <div className="w-full text-lg">Catan buddy</div>
        <Divider />
        {needRoll && (
          <div
            className="p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
            onClick={() => {
              let nextArray = diceRoll.map((p, i) => {
                return [roll(), roll()];
              });

              setDiceRoll(nextArray);
              setNeedRoll(false);
            }}
          >
            Roll Dice
          </div>
        )}
        <div
          className={clsx("grid gap-4", {
            "grid-cols-2": isMobile,
            "grid-cols-4": !isMobile,
          })}
        >
          {playerArray.map((p, i) => {
            return (
              <div key={i} className="flex flex-col items-center m-2 gap-2">
                <div>{rollMap[diceRoll[p][0]]}</div>
                <div>{rollMap[diceRoll[p][1]]}</div>
                <div className="font-semibold text-lg">
                  {diceRoll[p][0] + diceRoll[p][1] >= 0 &&
                    diceRoll[p][0] + diceRoll[p][1]}
                </div>
                <div className="text-xl">{players[p]}</div>
              </div>
            );
          })}
        </div>
        {/* {!needRoll && (
          <div
            className="p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
            onClick={() => {
              currentPlayerIndex((p) => {
                return p + 1;
              });
            }}
          >
            Next Player
          </div>
        )} */}
        <Divider />
        <div
          className="p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
          onClick={() => {
            setGameState("inGame");
          }}
        >
          Start Game
        </div>
      </div>
    </Card>
  );
};

export default Placement;
