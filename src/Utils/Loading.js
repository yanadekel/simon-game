import React, { useState } from "react";
import Spinner from "../components/Spinner/Spinner";

function Loading() {
  const [showSpinner, setShowSpinner] = useState(false);
  setTimeout(() => {
    setShowSpinner(true);
  });

  return <div>{showSpinner ? <Spinner /> : ""}</div>;
}

export default Loading;
