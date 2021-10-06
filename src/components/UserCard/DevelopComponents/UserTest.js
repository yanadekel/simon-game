import React, { useContext, useState, useEffect } from "react";
import GameContext from "../../../Contexts/GameContext";
import timeout from "../../../Utils/timeOutFunction";
import Button from "../../Button/Button";
import Image from "../../../Utils/Image";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./UserCard.scss";

const UserTest = () => {
  const { gameOn, gameOnStates, GameDispatch } = useContext(GameContext);
  const { userName, totalScore, users, rounds, btnText } = gameOnStates || {
    userName: "",
    totalScore: 0,
    users: [],
  };
  const [isUserName, setName] = useState(false);
  const [userImg, setUserImage] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUserImage(randomeImage);
    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          userImage: userImg,
        },
      },
    });

    if (!gameOn && total > 0) {
      setUserImage(randomeImage);
      setTotal(totalScore);
    }
  }, [gameOn]);

  useEffect(() => {
    if (totalScore > 0) {
      setTotal(totalScore);
      localStorage.setItem("usersDate", JSON.stringify(total));
    }
      if (!gameOn && rounds === 0 && total > 0) {
        reset();
    }
  }, [totalScore, rounds, gameOn]);

  useEffect(() => {
    if (isUserName && userName !== " ") {
      let copyNames = [...users];
      copyNames.push(userName);
      GameDispatch({
        type: "SET_GAME_ON_STATES",
        payload: {
          gameOnStates: {
            ...gameOnStates,
            users: [...copyNames],
          },
        },
      });

      localStorage.setItem("users", JSON.parse(users.push(userName)));
      localStorage.setItem("userName", JSON.stringify(userName));
      localStorage.setItem("usersDate", JSON.stringify(new Date()));
    }
  }, [isUserName, userName]);

  const handleChange = (e) => {
    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          userName: e.target.value,
        },
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Name was submitted: " + userName);
    await timeout(1000);
    setName(true);
  };

  const reset = async() => {
    GameDispatch({
      type: "SET_GAME_ON_STATES",
      payload: {
        gameOnStates: {
          ...gameOnStates,
          userName: "",
          totalScore: 0,
          rounds: 0,
        },
      },
    });

    setUserImage(randomeImage());
    setName(false);

    if (rounds === 0 && !gameOn && btnText === 'Simon') {
      setTotal(0)
    }
  };

  const randomeImage = () => {
    const imgArr = ["Img/1.jpeg", "Img/2.jpeg", "Img/3.jpeg"];
    let randomImg = imgArr[Math.floor(Math.random() * 3)];
    return randomImg;
  };

  return (
    <div className="UserCard-Wrapper">
      <div className="restBtn"></div>
      <div className="nameContainer">
        {isUserName ? (
          <div>
            <Button className="btn submitBtn" text="reset" onClick={reset} />
            {}
            <h3>{userName}</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={userName}
                onChange={handleChange}
                style={{ margin: "0 2px" }}
              />
            </label>
            <Button
              className="btn submitBtn"
              text="Submit"
              onClick={handleSubmit}
            />
          </form>
        )}
      </div>
      <div className="imgContainer">
        <Image
          src={userImg}
          alt="randome image for user"
          height={70}
          width={70}
          style={{ borderRadius: "50%", margin: "1px 0" }}
        />
      </div>
      <div className="userScore">
        <h3 style={{ margin: "3px" }}>
          Score: <span>{total}</span> points
        </h3>
      </div>
      <div className="home">
        <Typography
          component={Link}
          to="/"
          size="large"
          className="custom-button"
          style={{
            color: "black",
            position: "absolute",
            top: "10px",
            left: "20px",
          }}
        >
          <h3> HOME </h3>
        </Typography>
      </div>
    </div>
  );
};

export default UserTest;
