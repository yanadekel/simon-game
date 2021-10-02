import React from "react";

const GameContext = React.createContext({
  gameOn: false,
  gameOnStates: {
    rounds: 0,
    colorArr: ["yellow", "blue", "green", "red"],
    randomColorsArr: [],
    isGameloopOn: false,
    isUserTurnOn: false,
    gameBtn: "gameButton",
    btnText: "Simon",
    roundScore: 10,
    totalScore: 0,
  },
  users: {
    usersArr: [],
    usersNames: [],
  },

  GameDispatch: () => {},
});

export default GameContext;
