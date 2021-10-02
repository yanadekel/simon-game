import React from "react";
import { Button } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "../../Utils/Input";
import { Box, TextField } from "@mui/material";
import "./UserCard.scss";

const UserForm = ({
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
        p: 1,
        mt: 1.5,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          ml: 2,
        }}
      >
        {/* <AccountCircle sx={{ color: "action.active", mr: 1, mt: "16px" }} /> */}
        {ImgComponent}
        <TextField
          id="userName"
          label="Name"
          type="text"
          variant="standard"
          value={userName}
          name={`userName`}
          size="small"
          onChange={onChange}
        />
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "16px", marginTop: "16px", padding: "3px" }}
          type="submit"
          // onClick={onClick}
        >
          <h6>Submit</h6>
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          "& > :not(style)": { m: 1, width: "15ch" },
        }}
      >
        <TextField
          id="score"
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
          }}
        />
        <TextField
          id="totalRounds"
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
          }}
        />
      </Box>
    </Box>
  );
};

export default UserForm;
