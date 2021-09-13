import React from "react";
import Button from "../Button/Button";
import Color from "../Color/Color";
import "./ColorCard.scss";

const ColorCard = () => {
  return (
    <div className="colorCard-wrapper">
      <div className="upper-colors">
        <Color color="yellow" />
        <Color color="blue" />
      </div>
      <div className="btn-container">
        <Button className="gameButton" text="START" />
      </div>
      <div className="bottom-colors">
        <Color color="green" />
        <Color color="red" />
      </div>
    </div>
  );
};

export default ColorCard;
