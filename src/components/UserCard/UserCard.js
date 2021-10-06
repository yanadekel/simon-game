import React, { useContext, useState, useEffect } from "react";
import GameContext from "../../Contexts/GameContext";
import UserContext from "../../Contexts/UserContext";
import Image from "../../Utils/Image";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import timeout from "../../Utils/timeOutFunction";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { v4 as uuidv4 } from "uuid";
import "./UserCard.scss";

const UserCard = () => {
  const { gameOn, gameOnStates } = useContext(GameContext);
  const { rounds, totalScore, btnText, roundScore } = gameOnStates;
  const { name, scores, users, UserDispach } = useContext(UserContext);
  const [user, setUser] = useState({
    userName: "",
    score: totalScore,
    totalRounds: rounds,
  });
  const [isUserName, setName] = useState(false);
  const [avatar, setAvatar] = useState("Img/2.jpeg");
  const [errors, setErrors] = useState({});

  //controlls the value of rounds and score
  useEffect(() => {
    if (rounds > 0) {
      setUser({
        userName: user.userName,
        score: (rounds - 1) * roundScore,
        totalRounds: rounds - 1,
      });
    }
  }, [rounds]);

  // a reset/score
  useEffect(() => {
    if (btnText === "Simon" && !gameOn && isUserName) {
      const scoreArr = [...scores];
      scoreArr.push(user.score);
      UserDispach({
        type: "ADD_SCORE",
        payload: { scores: [...scoreArr] },
      });

      setUser({
        userName: user.userName,
        score: totalScore,
        totalRounds: rounds,
      });
    }

    if (btnText === "Simon" && !gameOn && !isUserName) {
      console.log(users, "users");
      localStorage.setItem("users", JSON.stringify(users));
      // const localUsersData = localStorage.getItem("users");
      // // timeout(1000)
      // UserDispach({
      //   type: "SET_USERS",
      //   payload: {
      //     users:localUsersData ? JSON.parse(localUsersData) : users,
      //   },
      // });
      setUser({
        userName: "",
        score: totalScore,
        totalRounds: rounds,
      });
    }
  }, [gameOn, btnText, isUserName, users]);

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

  const validate = () => {
    let temp = {};
    temp.userName = user.userName.length > 0 ? "" : "User name is required. ";
    temp.lettars =
      user.userName.length > 1 && user.userName.length < 10
        ? ""
        : "name must be at least 2 lettars. ";

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x == "");
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (btnText === "Simon" && !gameOn) {
      const temp = { user_name: name, user_scores: [...scores] };
      UserDispach({
        type: "SET_USERS",
        payload: {
          users: [...users, { ...temp, id: uuidv4 }],
        },
      });
      UserDispach({
        type: "ADD_SCORE",
        payload: { scores: [] },
      });
    }
    setName(false);

    setUser({
      userName: "",
      score: totalScore,
      totalRounds: rounds,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user submit", user);
    if (validate()) {
      UserDispach({
        type: "ADD_USERNAME",
        payload: { name: user.userName },
      });
      setAvatar(randomeImage());
      setName(true);
    }
  };

  const handleChange = (e) => {
    const userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser({ ...userInfo });
    // console.log("user change", user);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        alignItems: "center",
        bgcolor: "transperent",
        borderRadius: "12px",
        fontWeight: "bold",
        width: "100%",
        mt: 1.5,
      }}
    >
      <Typography
        component={Link}
        to="/"
        size="small"
        className="custom-button"
        style={{
          color: "black",
          lineHeight: 0.9,
        }}
      >
        HOME
      </Typography>

      {isUserName ? (
        <UserForm
          score={user.score}
          totalRounds={user.totalRounds}
          userName={user.userName.trim().toUpperCase()}
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
          pl={1}
          pr={1}
          id={"userNamef"}
          btnProp={"Reset"}
          InputProps={{ readOnly: true }}
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
          p={1}
          id={"userName"}
          btnProp={"Submit"}
          error={errors.userName || errors.lettars || errors.noChars}
        />
      )}
    </Box>
  );
};

export default UserCard;
