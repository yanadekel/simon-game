import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./pages/GamePage/Game";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appHeader">
          <Header className="header" />
        </div>
        <div className="appBody">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
