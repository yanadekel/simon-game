import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useContext, useReducer } from "react";
import "./App.scss";
import GameContext from "./Contexts/GameContext";
import GameReducer from "./Reducers/GameReducer";
import Game from "./pages/GamePage/Game";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

const App = () => {
  const initialGameState = useContext(GameContext);
  const [GameState, GameDispatch] = useReducer(
    GameReducer,
    initialGameState,
    undefined
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <HomePage />
            </Route>
          <Route path="/game">
            <GameContext.Provider value={{ ...GameState, GameDispatch }}>
              <Game />
            </GameContext.Provider>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
