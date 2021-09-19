import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "../../Utils/Image"
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="homeP-wrapper">
      <div className="game-nav">
        <AppBar
          position="fixed"
          className="custom-navbar"
          style={{ zIndex: "10", backgroundColor: "rgb(220,182,119)", opacity: "0.8" }}
        >
          <Container className="app-header" style={{ maxWidth: "none" }}>
            <Toolbar
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "secondary",
              }}
            >
              <div className="leftSideHeader">
                <Typography
                  component={Link}
                  to="/game"
                  variant="h6"
                  className="custom-title"
                  color="primary"
                >
                  <h1
                    className="app-logo"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      zIndex: "20",
                    }}
                  >
                    SIMON
                  </h1>
                </Typography>
              </div>
              <div className="centerHeader">
                <Button variant="h6" className="custom-title" color="primary">
                  <Popup
                    trigger={
                      <h3 className="instractions btn"> Instructions </h3>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal">
                        <div className="close">
                          <IconContext.Provider value={{ className: "close" }}>
                            <FaWindowClose onClick={close} />
                          </IconContext.Provider>
                        </div>
                        <div className="header"> SIMON GAME INSTRUCTIONS</div>
                        <div className="content">
                          {" "}
                          The device has four colored buttons.
                          <br /> A round in the game consists of the device
                          lighting up a sequence of one or more buttons,
                          <br />
                          in a random order, after which the player must
                          reproduce that order by pressing the buttons.
                          <br /> As the game progresses, after the number
                          <br /> of buttons to be pressed increases.
                        </div>
                      </div>
                    )}
                  </Popup>
                </Button>
              </div>
              <div className="rightSideHeader">
                <Button
                  component={Link}
                  to="/game"
                  size="large"
                  className="custom-button"
                  style={{ color: "black" }}
                >
                  <h3>GAME</h3>
                </Button>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className="homePimg">
        <Image
          src="Img/simon-game.jpeg"
          alt="simon-game"
          height={600}
          width={600}
          style={{}}
        />
      </div>
    </div>
  );
}
