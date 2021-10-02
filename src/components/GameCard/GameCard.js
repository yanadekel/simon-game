import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import Color from "../Color/Color";
import "./GameCard.scss";
import GameContext from "../../Contexts/GameContext";
import timeout from "../../Utils/timeOutFunction";

const GameCard = () => {
  const initialGameState = useContext(GameContext);
  const { 
    gameOn, 
    gameOnStates, 
    GameDispatch 
  } = initialGameState || {
    gameOn: false,
    gameOnStates: {},
  };

  const {
    colorArr,
    randomColorsArr,
    userArr,
    rounds,
    btnText,
    gameBtn,
    isGameloopOn,
    isUserTurnOn,
    roundScore,
  } = gameOnStates || {
    rounds: 0,
    colorArr: ["yellow", "blue", "green", "red"],
    randomColorsArr: [],
    userArr: [],
    isGameloopOn: false,
    isUserTurnOn: false,
    btnText: "Simon",
    roundScore: 10,
    userName: "",
  };
  const [inGame, setInGame] = useState(gameOn); // initioal game state
  const [computerLoop, setComputerLoop] = useState(isGameloopOn); //initial computer state
  const [userLoop, setUserLoop] = useState(isUserTurnOn); //initial user state
  const [lightColor, setLightColor] = useState(``); //initial colors state

  //first useEffect if game turned on: inGame=true

  useEffect(() => {
    if (inGame) {
      setComputerLoop(true);
    } else {
      return gameOnStates;
    }
  }, [inGame]);

  // console.log("gameOnStates", gameOnStates);

  //second useEffect if computerLoop is on: populate randomColorsArr with a new random color in each loop

  useEffect(() => {
    if (inGame && computerLoop) {
      let randomColor = colorArr[Math.floor(Math.random() * 4)];
      const randomArr = [...randomColorsArr];
      randomArr.push(randomColor);

      GameDispatch({
        type: "SET_GAME_ON_STATES",
        payload: {
          gameOnStates: {
            ...gameOnStates,
            randomColorsArr: [...randomArr],
          },
        },
      });
    }
  }, [computerLoop]);

  // console.log("randomColorsArr", randomColorsArr);

  //third useEffect if randomColorsArr.length turnLight function (turn lights and then populate userArr with lights and then userLoop on and computerLoop off)

  useEffect(() => {
    if (inGame && computerLoop && randomColorsArr.length > 0) {
      turnLight();
    }
  }, [randomColorsArr]);

  //fourth step is userLoop on, user should click on userArr colors, userArr shift first color and compers to user click, true then coputer loop false inGame=fals

  const userTurn = async (e) => {
    if (inGame && !computerLoop && userLoop) {
      setLightColor(e.target.value);

      const copy4user = [...userArr];
      let shiftFirstColor = copy4user.shift();

      if (e.target.value === shiftFirstColor) {
        if (copy4user.length > 0) {
          GameDispatch({
            type: "SET_GAME_ON_STATES",
            payload: {
              gameOnStates: {
                ...gameOnStates,
                userArr: [...copy4user],
              },
            },
          });
          await timeout(500);
          setLightColor("");
        } else {
          setUserLoop(false);
          await timeout(800);
          setLightColor("");
          GameDispatch({
            type: "SET_GAME_ON_STATES",
            payload: {
              gameOnStates: {
                ...gameOnStates,
                btnText: `+${roundScore} points`,
                userArr: [],
              },
            },
          });
          await timeout(1000);
          GameDispatch({
            type: "SET_GAME_ON_STATES",
            payload: {
              gameOnStates: {
                ...gameOnStates,
                rounds: rounds + 1,
                btnText: `${rounds + 1}`,
              },
            },
          });
          setComputerLoop(true);
        }
      } else {
        setUserLoop(false);
        setComputerLoop(false);
        await timeout(1000);
        setLightColor("");
        GameDispatch({
          type: "SET_GAME_ON_STATES",
          payload: {
            gameOnStates: {
              ...gameOnStates,
              btnText: `GAME OVER`,
            },
          },
        });
        await timeout(1000);
        GameDispatch({
          type: "SET_GAME_ON_STATES",
          payload: {
            gameOnStates: {
              ...gameOnStates,
              totalScore: (rounds - 1) * roundScore,
              btnText: `TOTAL SCORE: ${(rounds - 1) * roundScore}`,
            },
          },
        });
        await timeout(2000);
        GameDispatch({
          type: "SET_GAME_ON_STATES",
          payload: {
            gameOnStates: {
              ...gameOnStates,
              rounds: 0,
              randomColorsArr: [],
              userArr: [],
              btnText: `Simon`,
              userName: "",
            },
          },
        });
        setInGame(false);
        GameDispatch({
          type: "SET_GAME_ON",
          payload: {
            gameOn: true,
          },
        });
      }
    }
  };

  //async function that turns light after {ms}- becuse async can't be defined in useEffect

  const turnLight = async () => {
    for (let i = 0; i < randomColorsArr.length; i++) {
      await timeout(400);
      setLightColor(randomColorsArr[i]);
      await timeout(800);
      setLightColor("");
    }
    // await timeout(500);
    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          userArr: [...randomColorsArr],
          btnText: "Your Turn",
        },
      },
    });

    setComputerLoop(false);
    setUserLoop(true);
  };

  //function that turn game on: inGame true => triggers first useEffect

  const game = () => {
    GameDispatch({
      type: "SET_GAME_ON",
      payload: {
        gameOn: true,
      },
    });
    setInGame(true);

    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          rounds: rounds + 1,
          btnText: `${rounds + 1}`,
        },
      },
    });
  };

  return (
    <div className="GameCard-wrapper">
      <div className="upper-colors">
        <Color
          color={colorArr[0]}
          light={lightColor === colorArr[0] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && userLoop ? false : true}
          value={colorArr[0]}
        />
        <Color
          color={colorArr[1]}
          light={lightColor === colorArr[1] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && userLoop ? false : true}
          value={colorArr[1]}
        />
      </div>
      <div className="btn-container">
        <Button
          disabled={!inGame ? false : true}
          className={gameBtn}
          text={btnText}
          onClick={game}
        />
      </div>
      <div className="bottom-colors">
        <Color
          color={colorArr[2]}
          light={lightColor === colorArr[2] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && userLoop ? false : true}
          value={colorArr[2]}
        />
        <Color
          color={colorArr[3]}
          light={lightColor === colorArr[3] ? `light-${lightColor}` : ""}
          onClick={userTurn}
          disabled={inGame && userLoop ? false : true}
          value={colorArr[3]}
        />
      </div>
    </div>
  );
};

export default GameCard;
