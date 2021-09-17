import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import Color from "../Color/Color";
import "./ColorCard.scss";
import GameContext from "../../Contexts/GameContext";
import timeout from "../../Utils/Functions";

const ColorCard = () => {
  const initialGameState = useContext(GameContext);
  const { gameOn, gameOnStates, GameDispatch } = initialGameState || {gameOn:false, gameOnStates:{}}
  const {
    colorArr,
    randomColorsArr,
    userArr,
    rounds,
    btnText,
    gameBtn,
    isGameloopOn,
    isUserTurnOn,
    roundScore
  } = gameOnStates || {
    rounds: 0,
    colorArr:["yellow", "blue", "green", "red"],
    randomColorsArr:[],
    userArr:[],
    isGameloopOn:false, 
    isUserTurnOn:false,
    btnText:"Simon",
    roundScore:0
  };
  const [inGame, setInGame] = useState(gameOn);
  const [lightColor, setLightColor] = useState(``);
  const CopyRandomArr = [...randomColorsArr];
  // const copyUserArr = [...CopyRandomArr.shift()];

  useEffect(() => {
    if (inGame && isGameloopOn) {
      let randomColor = colorArr[Math.floor(Math.random() * 4)];
      CopyRandomArr.push(randomColor);

      GameDispatch({
        type: "SET_GAME_ON_STATES",
        payload: {
          gameOnStates: {
            ...gameOnStates,
            randomColorsArr: CopyRandomArr,
          },
        },
      });

      turnLight(CopyRandomArr);
    }

    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          isGameloopOn: false,
          isUserTurnOn: true,
        },
      },
    });
  }, [inGame]);

 

  const userTurn = (e) => {
    
  };

  const turnLight = async (arr) => {
    if (arr.length > -1) {
      for (let i = 0; i < arr.length; i++) {
        setLightColor(arr[i]);
        await timeout(2000);
        setLightColor("");
        await timeout(2000);
      }
    }
  };

  const game = () => {
    setInGame(true);
    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          isGameloopOn: true,
          btnText: `${rounds + 1}`,
        },
      },
    });
  };

  return (
    <div className="colorCard-wrapper">
      <div className="upper-colors">
        <Color
          color={colorArr[0]}
          light={lightColor === colorArr[0] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && isUserTurnOn? false : true}
        />
        <Color
          color={colorArr[1]}
          light={lightColor === colorArr[1] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && isUserTurnOn? false : true}
        />
      </div>
      <div className="btn-container">
        <Button className={gameBtn} text={btnText} onClick={game} />
      </div>
      <div className="bottom-colors">
        <Color
          color={colorArr[2]}
          light={lightColor === colorArr[2] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && isUserTurnOn? false : true}
        />
        <Color
          color={colorArr[3]}
          light={lightColor === colorArr[3] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && isUserTurnOn? false : true}
        />
      </div>
    </div>
  );
};

export default ColorCard;
