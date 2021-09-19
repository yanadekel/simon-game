import React, { useContext, useReducer } from "react";
import GameContext from "../../Contexts/GameContext";
import GameReducer from "../../Reducers/GameReducer";
import GameCard from "../../components/GameCard/GameCard";
import UserCard from "../../components/UserCard/UserCard";
import "./Game.scss";

const Game = () => {
  const initialGameState = useContext(GameContext);
  const [GameState, GameDispatch] = useReducer(
    GameReducer,
    initialGameState,
    undefined
  );

  return (
    <div className="GameContainer">
      <GameContext.Provider value={{ ...GameState, GameDispatch }}>
        <div className="UserCardContainer">
          <UserCard />
        </div>
        <div className="GameCardContainer">
          <GameCard />
        </div>
      </GameContext.Provider>
    </div>
  );
};

export default Game;
