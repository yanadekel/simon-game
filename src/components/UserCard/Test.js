import React, { useContext, useState, useEffect } from "react";
import GameContext from "../../Contexts/GameContext";
import Image from "../../Utils/Image";
import AccountCircle from "@mui/icons-material/AccountCircle";
import timeout from "../../Utils/timeOutFunction";
import User from "./User";
import "./UserCard.scss";
import UserForm from "./UserForm";

const Test = () => {
  const { gameOn, gameOnStates, users, GameDispatch } = useContext(GameContext);
  const { rounds, totalScore, btnText, roundScore } = gameOnStates;
  const { usersArr, usersNames } = users || { usersArr: [], usersNames: [] };
  const [user, setUser] = useState({
    userName: "",
    score: totalScore,
    totalRounds: rounds,
  });
  const [isUserName, setName] = useState(false);
  const [avatar, setAvatar] = useState("Img/2.jpeg");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!isUserName && rounds > 0) {
      setUser({
        userName: user.userName,
        score: (rounds - 1) * 10,
        totalRounds: rounds - 1,
      });
    }

    if (isUserName && rounds > 0) {
      setUser({
        userName: user.userName,
        score: (rounds - 1) * 10,
        totalRounds: rounds - 1,
      });
    }
  }, [rounds, isUserName]);

  useEffect(() => {
    if (btnText === "Simon" && !gameOn && isUserName) {
      setUser({
        userName: user.userName,
        score: totalScore,
        totalRounds: rounds,
      });
    } 

    if(btnText === "Simon" && !gameOn && !isUserName){
      setUser({
        userName: "",
        score: totalScore,
        totalRounds: rounds,
      }); 
    }
  }, [gameOn, btnText]);

  const randomeImage = () => {
    const imgArr = [
      "Img/1.jpeg",
      "Img/2.jpeg",
      "Img/3.jpeg",
      "Img/4.jpeg",
      "Img/5.jpeg",
      "Img/6.jpeg",
    ];
    let randomImg = imgArr[Math.floor(Math.random() * 6)];
    return randomImg;
  };

  //   const validate = () => {
  //     const errors = {};
  //     if (user.userName.trim() === "") errors.userName = "User name is required!";
  //     return Object.keys(errors) === 0 ? null : errors;
  //   };

  const handleReset = async (e) => {
    e.preventDefault();
    setName(false);
    await timeout(2000);
    // console.log("gameOn", gameOn);
    // console.log("btnText", btnText);

    if (btnText === "Simon" && !gameOn) {
      await timeout(2000);
      setUser({
        userName: "",
        score: totalScore,
        totalRounds: rounds,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user submit", user);
    setAvatar(randomeImage());
    setName(true);
  };

  const handleChange = (e) => {
    const userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser({ ...userInfo });
    // console.log("user change", user);
  };

  return (
    <>
      {isUserName ? (
        <User
          score={user.score}
          totalRounds={user.totalRounds}
          userName={user.userName}
          onSubmit={handleReset}
          onChange={handleChange}
          ImgComponent={
            <Image
              src={avatar}
              alt="randome image for user"
              height={50}
              width={50}
              style={{ borderRadius: "50%", margin: "7px 14px 0 0 " }}
            />
          }
        />
      ) : (
        <UserForm
          score={user.score}
          totalRounds={user.totalRounds}
          userName={user.userName}
          onChange={handleChange}
          onSubmit={handleSubmit}
          ImgComponent={
            <AccountCircle sx={{ color: "action.active", mr: 1, mt: "16px" }} />
          }
        />
      )}
    </>
  );
};

export default Test;
