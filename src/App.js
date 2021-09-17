import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useContext, useReducer } from "react";
import "./App.scss";
import GameContext from "./Contexts/GameContext";
import GameReducer from "./Reducers/GameReducer";
import Game from "./pages/GamePage/Game";
// import HomePage from "./pages/HomePage/HomePage";
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
        <div className="appHeader">
          <Header className="header" />
        </div>
        <div className="appBody">
          <Switch>
            {/* <Route exact path="/">
              <HomePage />
            </Route> */}
            <Route exact path="/">
              <GameContext.Provider value={{ ...GameState, GameDispatch }}>
                <Game />
              </GameContext.Provider>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
