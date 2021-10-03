import React, { useContext, useReducer, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import GameContext from "./Contexts/GameContext";
import GameReducer from "./Reducers/GameReducer";
import Game from "./pages/GamePage/Game";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./Utils/Loading";
import timeout from "./Utils/timeOutFunction";


const App = () => {
  const initialGameState = useContext(GameContext);
  const [isLoading, setIsLoading] = useState(false);
  const [GameState, GameDispatch] = useReducer(
    GameReducer,
    initialGameState,
    undefined
  );

  useEffect(() => {
    taggel();
  }, []);

  const taggel = async () => {
    setIsLoading(true);
    await timeout(3000);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading ? (
          <Loading />
        ) : (
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
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
