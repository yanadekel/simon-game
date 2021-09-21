import { CircularProgress } from "@material-ui/core";

import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner"
      style={{ position: "fix", top: "50%", left: "50%" }}
    >
      <CircularProgress />
    </div>
  );
};

export default Spinner;
