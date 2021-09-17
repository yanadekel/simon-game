import React, { useContext, useReducer } from "react";
import GameContext from "../../Contexts/GameContext";
import GameReducer from "../../Reducers/GameReducer";
import ColorCard from "../../components/ColorCard/ColorCard";
import "./Game.scss";

const Game = () => {
  const initialGameState = useContext(GameContext);
  const [GameState, GameDispatch] = useReducer(
    GameReducer,
    initialGameState,
    undefined
  );



  return (
    <div>
      <GameContext.Provider value={{ ...GameState, GameDispatch }}>
        <ColorCard />
      </GameContext.Provider>
    </div>
  );
};

export default Game;
