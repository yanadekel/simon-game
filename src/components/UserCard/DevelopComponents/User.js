import React, { useState, useEffect } from "react";
import Image from "../../../Utils/Image";
import { Button } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import "@fontsource/roboto/500.css";
import "./UserCard.scss";

const User = ({
  onChange,
  onSubmit,
  ImgComponent,
  score,
  totalRounds,
  userName,
  disabled,
}) => {
  console.log("name", userName);
  console.log("score", score);

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        alignItems: "center",
        bgcolor: "transperent",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "3px 3px 5px 4px rgba(0, 0, 0, 0.5)",
        fontWeight: "bold",
        maxWidth: { xs: "97%", md: "70%", lr: "40%" },
        mt: 1.5,
        pl: 1,
        pr: 1,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          ml: 2,
        }}
      >
        {/* <Image
          src={randomeImage}
          alt="randome image for user"
          height={50}
          width={50}
          style={{ borderRadius: "50%", margin: "7px 14px 0 0 " }}
        /> */}
        {ImgComponent}
        <TextField
          id="userNamef"
          label="Name"
          type="text"
          variant="standard"
          value={userName}
          onChange={onChange}
          name={`userName`}
          size="small"
          InputProps={{
            readOnly: true,
          }}
        />
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "16px", marginTop: "16px", padding: "3px" }}
          type="submit"
        >
          <h6>Reset</h6>
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space -between",
          "& > :not(style)": { m: 1, width: "15ch" },
        }}
      >
        <TextField
          id="scoref"
          value={score}
          name={`score`}
          label="Total Score"
          type="number"
          size="small"
          disabled={disabled}
          onChange={onChange}
          variant="outlined"
          InputProps={{
            readOnly: true,
            // shrink: 'true',
            // inputMode: "numeric",
            // pattern: "[0-9]*",
          }}
        />
        <TextField
          id="totalRoundsf"
          name={`totalRounds`}
          label="Total Rounds"
          value={totalRounds}
          type="number"
          size="small"
          disabled={disabled}
          onChange={onChange}
          style={{ marginLeft: "16px" }}
          variant="outlined"
          InputProps={{
            readOnly: true,
            // shrink: 'true',
            // inputMode: "numeric",
            // pattern: "[0-9]*",
          }}
        />
      </Box>
    </Box>
  );
};

export default User;
