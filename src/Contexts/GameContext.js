import React from 'react';

const GameContext = React.createContext({
    gameOn: false,
    gameOnStates: {
        rounds: 0,
        colorArr:["yellow", "blue", "green", "red"],
        randomColorsArr:[],
        userArr:[],
        isGameloopOn:false, 
        isUserTurnOn:false,
        gameBtn:"gameButton" ,
        btnText:"Simon",
        roundScore:0
    },
    
    GameDispatch: () => {}  
})

export default GameContext;
