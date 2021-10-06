import React, { useContext, useReducer } from "react";
import GameContext from "../../Contexts/GameContext";
import UserContext from "../../Contexts/UserContext";
import GameReducer from "../../Reducers/GameReducer";
import UserReducer from "../../Reducers/UserReducer";
import UserCard from "../../components/UserCard/UserCard";
import GameCard from "../../components/GameCard/GameCard";
import "./Game.scss";

const Game = () => {
  const initialGameState = useContext(GameContext);
  const initialUsersStates = useContext(UserContext);
  // const {users} = initialUsersStates;
  const [GameState, GameDispatch] = useReducer(
    GameReducer,
    initialGameState,
    undefined
  );

  const [userStates, UserDispach] = useReducer(
    UserReducer,
    initialUsersStates,
   undefined
  );

  return (
    <div className="GameContainer">
      <GameContext.Provider value={{ ...GameState, GameDispatch }}>
        <UserContext.Provider value={{ ...userStates, UserDispach }}>
          <div className="UserCardContainer">
            <UserCard />
          </div>
          <div className="GameCardContainer">
            <GameCard />
          </div>
        </UserContext.Provider>
      </GameContext.Provider>
    </div>
  );
};

export default Game;
